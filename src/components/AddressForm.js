import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import db from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import useFormik from "formik";

function AddressForm() {
  useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");

  const userCollectionRef = collection(db, "users");

  //   function submitButton() {
  //     console.log(Fname, Lname, Address, City, State, Zip);
  //   }

  async function createUser() {
    const user = {
      Fname,
      Lname,
      Email,
      Address,
      City,
      State,
      Zip,
    };
    await addDoc(userCollectionRef, user);
  }

  return (
    <div className="container py-5">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="Fname"
              type="text"
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="Lname"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="Email"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="Address"
            placeholder="1234 Main St"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="State"
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control name="Zip" onChange={(e) => setZip(e.target.value)} />
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit" onClick={createUser}>
          Submit
        </Button>
      </Form>
      {/* <div>
        <p>Fname: {Fname}</p>
        <p>Lname : {Lname}</p>
        <p>Email : {Email}</p>
        <p>Address : {Address}</p>
        <p>City : {City}</p>
        <p>State : {State}</p>
        <p>Zip : {Zip}</p>
      </div> */}
    </div>
  );
}

export default AddressForm;
