import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { firebaseAuth } from "../../provider/AuthProvider"




function SignUp() {
  const { handleSignup, inputs, setInputs,errors } = useContext(firebaseAuth);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
  };
  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(inputs)
    setInputs(prev => ({ ...prev, [name]: value }))
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="text"
        placeholder="Email"
        aria-describedby="inputGroupPrepend"
        name="email"
        onChange={handleChange}
        value={inputs.email}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="text"
        placeholder="Password"
        name="Password"
        onChange={handleChange}
        value={inputs.Password}
      />
      <Button className="top-1" type="submit">
        Submit form
          </Button>
      {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null}
    </Form>
  );
}
export default SignUp;
