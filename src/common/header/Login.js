import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isUserAuth, setIsUserAuth] = useState(true);

  function loginHandler() {
    email === "" ? setEmailError(true) : setEmailError(false);
    password === "" ? setPasswordError(true) : setPasswordError(false);
    if (props.user === undefined) {
      setIsUserAuth(false);
      return;
    }

    if (
      email !== "" &&
      password !== "" &&
      props.user.email !== undefined &&
      props.user.password !== undefined
    ) {
      if (email === props.user.email && password === props.user.password) {
        setIsUserAuth(true);
        props.handleUserLoggedIn(true);
        props.closeModal();
      } else {
        setIsUserAuth(false);
      }
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <FormControl size="small" style={{ marginTop: "20px" }}>
        <InputLabel htmlFor="email">Email address*</InputLabel>
        <Input id="email" onChange={(e) => setEmail(e.target.value)} />
        <FormHelperText error={emailError}>
          {emailError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl size="small" style={{ marginTop: "20px" }}>
        <InputLabel htmlFor="password">Password*</InputLabel>
        <Input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormHelperText error={passwordError}>
          {passwordError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <p style={{ color: "red", display: isUserAuth ? "none" : "block" }}>
        Email or password is incorrect
      </p>

      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
        onClick={loginHandler}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;