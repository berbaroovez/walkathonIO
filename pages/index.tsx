import styled from "styled-components";
// import firebase from "../util/firebase";
import Link from "next/link";
import { testFirebase } from "../util/db";

import { useCustomAuth } from "../util/authContext";
const Title = styled.h1`
  font-size: 50px;
`;

const Home = () => {
  // const auth = getAuth();
  // const testfirebase = () => {
  //   firebase.database().ref("/").set({
  //     test: "test",
  //   });
  // };
  const { user, firebaseSignOut } = useCustomAuth();

  return (
    <div>
      {user ? user : "not logged in"}
      <button onClick={firebaseSignOut}>Sign Out</button>
      <button onClick={testFirebase}>test</button>
      {/* <button
        onClick={() => {
          console.log(auth);
        }}
      >
        auth
      </button>
      <button onClick={login}>login</button> */}
      <Title>Home</Title>
      <Link href="/signup">Signup page</Link>
    </div>
  );
};

export default Home;
