import { useEffect, useState } from "react";
import { useCustomAuth } from "../util/authContext";
const test = () => {
  const { user, confirmMagicLink } = useCustomAuth();
  // this file is used to login users to your app
  useEffect(() => {
    if (typeof window != "undefined") {
      confirmMagicLink();
    }
  }, []);
  return (
    <div>
      {user ? user : "not logged in"}
      <h1>login in </h1>
    </div>
  );
};

export default test;
