import React from "react";
import { Navbar, Nav,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import FbCredentials from "../Firebase/FbCredentials";


// import Modaal from "../Modal/Modal";

// make a new component

const Navigation = () => {
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
          <Nav.Link  Link to="/parentPortal">
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
          <Button onClick={() => FbCredentials.auth().signOut()}>Sign out</Button>
        </Nav>
        {/* TODO:On teacher portal hide all buttons and show create child
            if parent go to parent portal  */}

        

      </Navbar>
    </>
  );
};

export default Navigation;
