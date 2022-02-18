import { FormEvent, useState } from "react";
import { CreateUser } from "../util/db";
import { useCustomAuth } from "../util/authContext";
import { styled } from "../stitches.config";
import { Fieldset, InputField, Label } from "../components/InputField";
import Button from "../components/WalkathonModul/Button/Button";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const { sendMagicLink } = useCustomAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    sendMagicLink(email);
  };
  return (
    <Layout>
      <Box>
        <h1>Sign Up</h1>

        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <Label htmlFor="email">Email</Label>
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Fieldset>

          <Button type="green">Sign Up</Button>
        </Form>
      </Box>
    </Layout>
  );
};
const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

const Box = styled("div", {
  all: "unset",
  display: "flex",
  flexDirection: "column",
  maxWidth: "$7",
  padding: "$3",
  borderRadius: "$3",
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: `2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)`,
});

const Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "#fafafa",
});

export default SignIn;
