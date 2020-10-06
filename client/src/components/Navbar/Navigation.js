import React from "react";
import { Navbar, Nav, Button, eventKey } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import FbCredentials from "../Firebase/FbCredentials";
import { MenuItems } from "./MenuItems";

const Navigation = () => {
  return (
    <>
      <Navbar variant="light">
        <Navbar.Brand href="#">
          <img
            src="client\src\components\Images\lilOnes.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="lilOnes"
            
          />
        </Navbar.Brand>
        <Nav className="mr-auto" paddingLeft="100px">
          <Nav.Item>
            {MenuItems.map((item, index) => {
              return (
                <div
                  style={{ display: "inline-block" }}
                  key={index}
                  className={item.cName}
                >
                  <Nav.Link href={item.route}>{item.name}</Nav.Link>
                </div>
              );
            })}
          </Nav.Item>

          {/* <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            ContactUs
          </Nav.Link>
          <Nav.Link Link to="/parentPortal">
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
          <Button onClick={() => FbCredentials.auth().signOut()}>
            Sign out
          </Button> */}
          {/* </Nav> */}
          {/* TODO:On teacher portal hide all buttons and show create child
            if parent go to parent portal  */}
        </Nav>
      </Navbar>
    </>
  );
};
export default Navigation;
