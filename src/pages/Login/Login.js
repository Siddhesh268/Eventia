import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Login() {
  (function () {
    let forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  };

  return (
    <>
      <div
        style={{ marginTop: "15%" }}
        className="col-12 d-flex justify-content-around"
      >
        <Form className="col-2  " onSubmit={handleSubmit}>
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mx-5">
            <Button className="col-12" variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
