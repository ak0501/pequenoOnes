import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import SignIn from "../Modal/SignInButton";
import { Link } from "react-router-dom";
import CreateChild from "../Modal/CreateChildButton";
import { FaGalacticSenate } from "react-icons/fa";
const Navigation = () => {
  const [parentPage, setParentPage] = useState(false);
  const [teacherPage, setTeacherPage] = useState(false);
  const showTabs = () => {
      setParentPage(true);
     
  }
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
              {parentPage}
          </Nav.Link>
          
            <Nav.Link as={Link} to="/teacherPortal">
              {teacherPage}
          </Nav.Link>
          </Nav>
        
          <SignIn></SignIn>
          <span>{""}</span>
          <CreateChild></CreateChild>
        </Navbar>
      </>
    );
  };
  export default Navigation;
