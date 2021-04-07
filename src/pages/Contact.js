import { useState } from "react";
import { Jumbotron, Button, Form, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Roll from "react-reveal/Roll";
import Loader from "react-loader-spinner";
import Layout from "../Layout";

const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email Is Invalid")
      .required("Email Is Required")
      .max(255, "Email Must Be 255 Characters Or Less"),
    name: Yup.string().required("Your Name Is Required").max(64, "Name Must Be 64 Characters Or Less"),
    message: Yup.string()
      .required("Please Enter A Message")
      .min(10, "Message Must Be At Least 10 Characters")
      .max(512, "Message Must Be 512 Characters Or Less")
  });
  
  const styles = {
    jumbo: { boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.5)", marginTop: 20 }
  };
  
  export default function Contact({ match }) {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const handleSuccess = () => setSuccess(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Layout match={match}>
          <Roll bottom cascade>
            <Jumbotron style={styles.jumbo}>
              <h1 style={{ color: "#17a2b8" }}>Contact CABL</h1>
              <Formik
                initialValues={{ email: "", name: "", message: "" }}
                validationSchema={ContactSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  setShow(false);
                  try {
                    await fetch("https://damp-fjord-38583.herokuapp.com/api/contacts", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(values)
                    }).then(response => response.json());
    
                    setError(false);
                    handleSuccess();
                    handleShow();
                  } catch {
                    setError(true);
                  }
    
                  setSubmitting(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <div>
                    {error && (
                      <p style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}>
                        Unable to submit your information right now.
                      </p>
                    )}
                    {isSubmitting ? (
                      <div>
                        <Loader type="Puff" color="black" height={100} width={100} />
                        <h2>Submitting Your Information...</h2>
                      </div>
                    ) : (
                      <div>
                        {success ? (
                          <div>
                            {show && (
                              <Alert variant="success" onClose={handleClose} dismissible>
                                <Alert.Heading>Information Sent</Alert.Heading>
                                <h2 style={{ paddingTop: "50px" }}>You Have Successfully Submitted Your Information</h2>
                                <hr />
                                <div className="d-flex justify-content-end">
                                  <Button onClick={handleClose} variant="outline-success">
                                    Close
                                  </Button>
                                </div>
                              </Alert>
                            )}
                          </div>
                        ) : (
                          <Form noValidate onSubmit={handleSubmit} style={styles.form}>
                            <Form.Group controlId="formGroupName">
                              <Form.Label>Your Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                                value={values.name}
                                onBlur={handleBlur("name")}
                                onChange={handleChange("name")}
                                style={{ borderColor: errors.name && touched.name && "red" }}
                              />
                              <p style={styles.errorText}>{errors.name && touched.name && errors.name}</p>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter Your Email Address"
                                value={values.email}
                                onBlur={handleBlur("email")}
                                onChange={handleChange("email")}
                                style={{ borderColor: errors.email && touched.email && "red" }}
                              />
                              <p style={styles.errorText}>{errors.email && touched.email && errors.email}</p>
                            </Form.Group>
                            <Form.Group controlId="formGroupMessage">
                              <Form.Label>Message</Form.Label>
                              <Form.Control
                                as="textarea"
                                type="text"
                                placeholder="Enter A Message"
                                value={values.message}
                                onBlur={handleBlur("message")}
                                onChange={handleChange("message")}
                                style={{ borderColor: errors.message && touched.message && "red" }}
                              />
                              <p style={styles.errorText}>{errors.message && touched.message && errors.message}</p>
                            </Form.Group>
                            <Button
                              variant="primary"
                              type="submit"
                              disabled={isSubmitting || Object.keys(errors).length > 0}>
                              Submit
                            </Button>
                          </Form>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </Formik>
            </Jumbotron>
          </Roll>
        </Layout>
      );
    }
    