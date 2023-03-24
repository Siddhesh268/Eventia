import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div
        style={{ marginTop: "12%" }}
        className="col-12 d-flex justify-content-around"
      >
        <Form
          className="col-4"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group className="col-6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter valid First Name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter valid Last Name
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="col-6" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Username
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="col-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email address.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mx">
            <Form.Group className="col-6" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please enter the password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-6" controlId="validationCustom04">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Re-enter password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter the password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="mt-4 d-flex justify-content-around">
            <Button className="col-7" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
