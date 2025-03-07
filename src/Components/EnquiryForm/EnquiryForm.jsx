import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactImg from "../../Images/ConImage.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./EnquiryForm.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "react-bootstrap/Spinner";

import * as yup from "yup";

const EnquiryForm = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const MySwal = withReactContent(Swal);
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Enter Valid name")
      .required("Enter Name")
      .min(3, "Enter Valid name")
      .max(20, "Character length must not exceed 15"),
    lastName: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Enter Valid name")
      .required("Enter your first name")
      .min(3, "Enter Valid name")
      .max(20, "Character length must not exceed 15"),
    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Enter Valid Email id")
      .required(),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      state: "",
      zip: "",
      term: false,
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then((res) => {
          MySwal.fire({
            icon: "success",
            title: "Form Submitted Sucessfully",
            time: 1000,
          });
          console.log(res);
        })
        .catch((err) => {
          MySwal.fire({
            icon: "error",
            title: "Failed to Submit",
            time: 1000,
          });
          console.log(err, "hello");
        });
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });

  // const submitFormData = (event, errors) => {
  //   emailjs
  //     .sendForm(
  //       import.meta.env.VITE_SERVICE_ID,
  //       import.meta.env.VITE_TEMPLATE,
  //       formRef.current,
  //       import.meta.env.VITE_PUBLIC_KEY
  //     )
  //     .then((res) => {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Form Submitted Sucessfully",
  //         time: 4000,
  //       });
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       MySwal.fire({
  //         icon: "error",
  //         title: "Failed to Submit",
  //         time: 4000,
  //       });
  //       console.log(err, "hello");
  //     });
  // };

  // const handleSubmit = () => {
  //   console.log(formRef, "kiiiuibn");
  //   console.log(formRef.current, "current forms in title");
  //   event.preventDefault();

  //   emailjs
  //     .sendForm(
  //       import.meta.env.VITE_SERVICE_ID,
  //       import.meta.env.VITE_TEMPLATE,
  //       formRef.current,
  //       import.meta.env.VITE_PUBLIC_KEY
  //     )
  //     .then((res) => {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Form Submitted Sucessfully",
  //         time: 4000,
  //       });
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       MySwal.fire({
  //         icon: "error",
  //         title: "Failed to Submit",
  //         time: 4000,
  //       });
  //       console.log(err, "hello");
  //     });

  //   // console.log(values);
  // };

  // const submitFormData = () => {
  //   console.log(formRef, "kiiiuibn");
  //   console.log(formRef.current, "current forms in title");
  //   event.preventDefault();

  //   emailjs
  //     .sendForm(
  //       import.meta.env.VITE_SERVICE_ID,
  //       import.meta.env.VITE_TEMPLATE,
  //       formRef.current,
  //       import.meta.env.VITE_PUBLIC_KEY
  //     )
  //     .then((res) => {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Form Submitted Sucessfully",
  //         time: 4000,
  //       });
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       MySwal.fire({
  //         icon: "error",
  //         title: "Failed to Submit",
  //         time: 4000,
  //       });
  //       console.log(err, "hello");
  //     });

  //   // console.log(values);
  // };

  // const handleSubmit = (values, actions) => {
  //   console.log(values, "values are here");
  //   // Here you can handle form submission
  //   // actions.setSubmitting(false);
  // };

  return (
    <Container className="contact__info">
      <Row className="row__contact">
        <Col xs={12} sm={12} lg={6} className="text-center">
          <LazyLoadImage src={ContactImg} className="img-fluid" />
        </Col>
        <Col className="form__section row__contact" xs={12} sm={12} lg={6}>
          <div>
            <h3 className="contact__heading">
              WE'D LOVE TO HEAR FROM YOU Drop Us a Line
            </h3>
            {/*<Formik
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                submitFormData(values);
                setSubmitting(false);
              }}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                city: "",
                state: "",
                zip: "",
              }}>
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                isSubmitting,
              }) => ( */}
            <Form
              name="contact"
              onSubmit={formik.handleSubmit}
              noValidate
              // onSubmit={() => handleSubmit(submitFormData())}
              ref={formRef}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label className="input__label">First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstN ame"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    placeholder="First name"
                    isInvalid={!!formik.errors.firstName}
                    isValid={
                      formik.touched.firstName && !formik.errors.firstName
                    }
                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label className="input__label">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder="Last name"
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                    isInvalid={!!formik.errors.lastName}
                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername">
                  <Form.Label className="input__label">Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      aria-describedby="inputGroupPrepend"
                      isValid={formik.touched.email && !formik.errors.email}
                      isInvalid={!!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label className="input__label">City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    isValid={formik.touched.city && !formik.errors.city}
                    isInvalid={!!formik.errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.city}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label className="input__label">State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    isValid={formik.touched.state && !formik.errors.state}
                    isInvalid={!!formik.errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.state}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <Form.Label className="input__label">Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    onChange={formik.handleChange}
                    name="zip"
                    vlaue={formik.values.zip}
                    isValid={formik.touched.zip && !formik.errors.zip}
                    isInvalid={!!formik.errors.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.zip}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="term"
                  onChange={formik.handleChange}
                  // vlaue={formik.values.term}
                  // isValid={formik.touched.term && !formik.errors.term}
                  isInvalid={!!formik.errors.term}
                  label="Agree to terms and conditions"
                  // feedback="You must agree before submitting."
                  feedback={formik.errors.term}
                  feedbackType="invalid"
                />
                {/* <Form.Control.Feedback type="invalid">
                  {formik.errors.term}
                </Form.Control.Feedback> */}
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" disabled={loading}>
                {loading && (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {loading ? "Submitting..." : "Contact Us"}
              </Button>
              {/* {loading && (
                <Spinner animation="border" variant="primary" size="sm" />
              )} */}
            </Form>
            {/* )}
            </Formik> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EnquiryForm;
