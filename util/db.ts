import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
interface User {
  email: string;
  schoolName: string;
}

const testFirebase = async () => {
  console.log("testFirebase");
  try {
    console.log("testFirebase try");
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/",
  // This must be true.
  handleCodeInApp: true,
};

const CreateUser = async (user: User) => {
  const auth = getAuth();
  sendSignInLinkToEmail(auth, user.email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
};
export { testFirebase, CreateUser };
