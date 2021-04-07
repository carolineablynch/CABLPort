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

    