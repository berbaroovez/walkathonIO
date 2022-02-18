import GlobalStyles from "../util/GlobalStyles";
import { AuthProvider } from "../util/authContext";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("use effect");
    initializeApp({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    });
  }, []);
  return (
    <AuthProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </AuthProvider>
  );
}
