import React from "react";
import { Navbar, Nav,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import SignUp from '../Routes/SignUp';


import { Link } from "react-router-dom";


// import Modaal from "../Modal/Modal";

// make a new component

const Navibar = () => {
  return (
    <>
      <Navbar sideClass="navTransparent" bg="light" variant="light">
        <Navbar.Brand href="#"><img
          src="client\src\components\Images\lilOnes.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="lilOnes"
        /></Navbar.Brand>
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
         
          <Nav.Link as={Link} to="/teacherPortal">
            Teacher Portal
          </Nav.Link>
          <Button as={Link} to="/login"> 
            LogIn
          </Button>
         
          <Button as={Link} to="/SignUp"> 
            SignUp
          </Button>
        </Nav>
        {/* TODO:On teacher portal hide all buttons and show create child
            if parent go to parent portal  */}

        

      </Navbar>
    </>
  );
};

{

}
// Modal Component
// Login Form

export default Navibar;
