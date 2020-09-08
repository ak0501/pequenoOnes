import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { useForm } from "react-hook-form";
// import * as yup from 'yup';
const LoginForm = () => {
  const { handleSubmit, register, errors } = useForm();
  // console.log(errors, {})
  const onSubmit = (values) => console.log(values);


  // basically first i want to know when its making the request but havent got the response yet. 

  const [submitting, setSubmitting] = useState(false);

  // const schema = yup.object().shape({
  //   email: yup
  //     .string()
  //     .label('Email')
  //     .email()
  //     .required(),
  //   password: yup
  //     .string()
  //     .label('Password')
  //     .required()
  //     .matches(
  //       /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //       "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
  //   username: yup.number().positive().integer().required()
  // })
  return (
    // eventhandler onSubmit
    <Form onSubmit={handleSubmit((onSubmit) => {
      
      setSubmitting(true);

      // setSubmitting(false);

    })}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label></Form.Label>{" "}
        <Form.Control
          name="email"
          placeholder="Email"
          ref={register({
            required: "required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}
      </Form.Group>{" "}
      {/* <Form.Group controlId="">
        <Form.Label></Form.Label>{" "}
        <Form.Control
          name="username"
          placeholder="username"
          ref={register({
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
        {errors.username && errors.username.message}
      </Form.Group> */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label></Form.Label>{" "}
        <Form.Control
          type='password'
          name="password"
          placeholder="password"
          ref={register({
            required: "required",
            minLength: {
              value: 8,
              message: "must be 8 chars"
            },
            validate: (value) => {
              return [
                /[a-z]/,
                /[A-Z]/,
                /[0-9]/,
                /[^a-zA-Z0-9]/
              ].every((pattern) => pattern.test(value)) || "must include lower, upper and special chars";
            }
          })}
        />
        {errors.password && errors.password.message}
      </Form.Group>
      <Button variant="primary" disabled={submitting} type="submit" block>
        Login{" "}
      </Button>{" "}
    </Form >
  );
};
export default LoginForm;
