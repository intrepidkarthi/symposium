import React, { useState } from "react";

//Components
import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";

//Utils
import { isEmpty } from "utils";

//Styles
import "./styles.scss";

type RegistrationModalProps = {
  show: boolean;
  hideModal: () => void;
  eventName?: string;
};

type FormValues = {
  name?: string;
  email?: string;
  collegeName?: string;
  phoneNumber?: string;
  password?: any;
};

function RegistrationModal({
  show,
  hideModal,
  eventName
}: RegistrationModalProps) {
  const [isValidated, setIsValidate] = useState(true);
  const handleSubmit = (submittedValues: FormValues) => {
    const Vals = ["name", "email", "collegeName", "phoneNumber", "password"];
    console.log(submittedValues);
    hideModal();
    Vals.forEach(item => {
      const fn: any = formik.handleChange(item);
      fn("");
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      collegeName: "",
      phoneNumber: "",
      password: ""
    },
    validate: (values: FormValues) => {
      const errors: FormValues = {};
      if (!values.name) errors.name = "Required";
      if (!values.email) errors.email = "Required";
      if (!values.collegeName) errors.collegeName = "Required";
      if (!values.phoneNumber) errors.phoneNumber = "Required";
      if (!values.password) errors.password = "Required";
      if (isEmpty(errors)) {
        setIsValidate(false);
      } else {
        setIsValidate(true);
      }
      return errors;
    },
    onSubmit: (values: FormValues) => {
      // console.log(values);
      // hideModal();
    }
  });
  return (
    <Modal show={show} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {eventName ? `Register for ${eventName}` : "Registration Form"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              isInvalid={!!formik.errors.name && formik.touched.name}
              value={formik.values.name}
              onChange={(e: any) => {
                formik.setFieldTouched("name");
                formik.handleChange(e);
              }}
            />
            <Form.Text className="text-muted">
              Looking forward to seeing you, {formik.values.name}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="userEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              isInvalid={!!formik.errors.email && formik.touched.email}
              value={formik.values.email}
              onChange={(e: any) => {
                formik.setFieldTouched("email");
                formik.handleChange(e);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="userCollegeName">
            <Form.Label>Which college are you from?</Form.Label>
            <Form.Control
              type="text"
              name="collegeName"
              isInvalid={
                !!formik.errors.collegeName && formik.touched.collegeName
              }
              value={formik.values.collegeName}
              onChange={(e: any) => {
                formik.setFieldTouched("collegeName");
                formik.handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="userPhoneNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              name="phoneNumber"
              isInvalid={
                !!formik.errors.phoneNumber && formik.touched.phoneNumber
              }
              value={formik.values.phoneNumber}
              onChange={(e: any) => {
                formik.setFieldTouched("phoneNumber");
                formik.handleChange(e);
              }}
            />
            <Form.Text className="text-muted">
              What is your dial number?
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="userPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              isInvalid={!!formik.errors.password && formik.touched.password}
              value={formik.values.password}
              onChange={(e: any) => {
                formik.setFieldTouched("password");
                formik.handleChange(e);
              }}
            />
            <Form.Text className="text-muted">
              It can be a secret in between us :)
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={isValidated}
          onClick={() => handleSubmit(formik.values)}
        >
          Register Me!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegistrationModal;
