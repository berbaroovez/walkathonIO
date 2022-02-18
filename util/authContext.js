import React, { useState, useEffect, useContext, createContext } from "react";
import { initializeApp } from "firebase/app";
import { app } from "./firebase"; //need to import so we initialize the app
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useCustomAuth = () => {
  return useContext(authContext);
};

//   const auth

// }

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/callback",
  // This must be true.
  handleCodeInApp: true,
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  // initializeApp({
  //   apiKey: process.env.NEXT_PUBLIC_API_KEY,
  //   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  //   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // });
  const auth = getAuth();

  const sendMagicLink = async (email) => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
  };

  const confirmMagicLink = async () => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          console.log("Signed in ", result);
          setUser("carterolson3");
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
          console.log("Error signing in", error);
        });
    }
  };

  const firebaseSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log("Sign out", error);
      });
  };

  const handleUser = (user) => {
    if (user) {
      setUser(user.email);
    } else {
      setUser(null);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      handleUser(user);
    });

    return () => unsubscribe();
  }, []);

  return {
    sendMagicLink,
    confirmMagicLink,
    firebaseSignOut,
    user,
  };
};
