import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [registered, setRegistered] = useState(false);

  function handleRegister() {
    firstName === "" ? setFirstNameError(true) : setFirstNameError(false);
    lastName === "" ? setLastNameError(true) : setLastNameError(false);

    email === "" ? setEmailError(true) : setEmailError(false);
    password === "" ? setPasswordError(true) : setPasswordError(false);
    contact === "" ? setContactError(true) : setContactError(false);

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      contact !== ""
    ) {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        contact: contact,
      };
      setRegistered(true);
      props.handleUpdateUser(userData);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <FormControl size="small" style={{ marginTop: "15px" }}>
        <InputLabel htmlFor="firstName">First Name*</InputLabel>
        <Input
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <FormHelperText error={firstNameError}>
          {firstNameError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl size="small" style={{ marginTop: "15px" }}>
        <InputLabel htmlFor="lastName">Last Name*</InputLabel>
        <Input id="lastName" onChange={(e) => setLastName(e.target.value)} />
        <FormHelperText error={lastNameError}>
          {lastNameError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
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
      <FormControl size="small" style={{ marginTop: "20px" }}>
        <InputLabel htmlFor="contact">Contact No*</InputLabel>
        <Input id="contact" onChange={(e) => setContact(e.target.value)} />
        <FormHelperText error={contactError}>
          {contactError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <p style={{ display: registered ? "block" : "none" }}>
        Registration Successful. Please Login!
      </p>
      <br />
      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
        onClick={handleRegister}
      >
        Register
      </Button>
    </div>
  );
};

export default Register;