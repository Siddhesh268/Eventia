import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import "./Login.css";

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
  const [passwordReset, setPasswordReset] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user.emailVerified) {
          navigate("/dashboard");
        } else {
          console.log("please verify email");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return response;
  };

  return (
    <>
      <div
        style={{ marginTop: "11%" }}
        className="col-12 d-flex justify-content-around"
      >
        <Form className="formContainer" onSubmit={handleSubmit}>
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {!passwordReset ? (
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          ) : (
            <></>
          )}
          <div className="mx-5 mt-2 row-2">
            <Button className="col-12 p-2" variant="primary" type="submit">
              {passwordReset ? "Send Link" : "Login"}
            </Button>
          </div>
          {!passwordReset ? (
            <div className="d-flex justify-content-around mt-3">
              <a
                style={{
                  textDecoration: "none",
                  color: "grey",
                  cursor: "pointer",
                }}
                onClick={() => setPasswordReset(true)}
              >
                Forgot Password ?
              </a>
            </div>
          ) : (
            <></>
          )}

          {!passwordReset ? (
            <div className=" d-flex justify-content-around mt-4">
              {" "}
              <GoogleButton />
            </div>
          ) : (
            <></>
          )}
        </Form>
      </div>
    </>
  );
}
