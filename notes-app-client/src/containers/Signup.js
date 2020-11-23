import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useAppContext } from "../libs/contextLib";
import { useHistory } from "react-router-dom";
import "./Signup.css";
const data = {
  email : "honey@yahoo.com",
  username : "honey",
  password: "123"
}

export default function Signup() {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();


  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && username.length>0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      if(data.email && data.password && data.username){
        data["email"] = email;
        data["username"] = username;
        data["password"] = password;
        userHasAuthenticated(true);
        history.push("/login");
      }
      
    } catch (e) {
      alert(e.message);
    }
    console.log(data);
  }

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}