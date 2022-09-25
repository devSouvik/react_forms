import "./index.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import db from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { AddressSchema } from "../schemas/index";

const initialValues = {
  Fname: "",
  Lname: "",
  Email: "",
  Address: "",
  City: "",
  State: "",
  Zip: "",
};

function AddressForm() {
  const userCollectionRef = collection(db, "users");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AddressSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        await addDoc(userCollectionRef, values);
        action.resetForm();
      },
    });
  // console.log(formik);
  // console.log(errors);

  return (
    <div className="container py-5">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="Fname"
              type="text"
              placeholder="First Name"
              value={values.Fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Fname && touched.Fname ? (
              <p className="error-class">{errors.Fname}</p>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="Lname"
              type="text"
              placeholder="Last Name"
              value={values.Lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Lname && touched.Lname ? (
              <p className="error-class">{errors.Lname}</p>
            ) : null}
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="Email"
            type="email"
            placeholder="Enter email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            // onChange={(e) => setEmail(e.target.value)}
          />
          {errors.Email && touched.Email ? (
            <p className="error-class">{errors.Email}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="Address"
            placeholder="1234 Main St"
            value={values.Address}
            onChange={handleChange}
            onBlur={handleBlur}
            // onChange={(e) => setAddress(e.target.value)}
          />
          {errors.Address && touched.Address ? (
            <p className="error-class">{errors.Address}</p>
          ) : null}
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="City"
              value={values.City}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setCity(e.target.value)}
            />
            {errors.City && touched.City ? (
              <p className="error-class">{errors.City}</p>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="State"
              value={values.State}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setState(e.target.value)}
            />
            {errors.State && touched.State ? (
              <p className="error-class">{errors.State}</p>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="Zip"
              value={values.Zip}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={(e) => setZip(e.target.value)}
            />
            {errors.Zip && touched.Zip ? (
              <p className="error-class">{errors.Zip}</p>
            ) : null}
          </Form.Group>
        </Row>
        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        {/* onClick={createUser} */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddressForm;
