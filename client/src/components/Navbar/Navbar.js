import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import SignIn from "../Modal/SignInButton";
import { Link } from "react-router-dom";
import CreateChild from "../Modal/CreateChildButton";
const Navibar = () => {
  // const [parentPage, setParentPage] = useState(false);
  // const [teacherPage, setTeacherPage] = useState(false);
  // const showTabs = () => {
  return (
    <>
      <Navbar bg="#11ffee00" variant="light">
        <Navbar.Brand href="#home">LilOnes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            ContactUs
          </Nav.Link>
          <Nav.Link as={Link} to="/parentPortal">
            Parent Portal
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/activites">
            Activites
          </Nav.Link> */}
          <Nav.Link as={Link} to="/teacherPortal">
            Teacher Portal
          </Nav.Link>
        </Nav>
        {/* TODO:On teacher portal hide all buttons and show create child
            if parent go to parent portal  */}
        <SignIn>}</SignIn>
        <span>{""}</span>
        <CreateChild></CreateChild>
      </Navbar>
    </>
  );
};
export default Navibar;
