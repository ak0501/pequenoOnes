import React, { useState } from "react";
import { Navbar,Nav } from "react-bootstrap";


const Navigation = () => {
  const [parentPage, setParentPage] = useState(false);
  const [teacherPage, setTeacherPage] = useState(false);

  const showParentPage = () => {
    setParentPage(true);

  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
      React Bootstrap
    </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default Navigation;
