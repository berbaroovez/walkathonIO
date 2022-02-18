import { initializeApp } from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
});

const db = getFirestore(app);
export { db, app };
// export default firebase;
