import React from "react";
import { Navbar, Nav, Button, eventKey } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import FbCredentials from "../Firebase/FbCredentials";
import { MenuItems } from "./MenuItems";
import "./Navigation.css";
import SignOut from "../Routes/SignOut";

const Navigation = () => {

  // let routeFunc = (route) => {
  //  return ((route !== '/SignOut')? route : FbCredentials.auth().signOut())
  // };

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
        {/* <Nav className="mr-auto"> */}
          <Button variant="link">
            {MenuItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={item.cName}
                >
                  <Button variant="link" href={item.route}>{item.name} </Button>
                </div>
              );
              
            })}
            <SignOut></SignOut>
          </Button>
        {/* </Nav> */}
      </Navbar>
    </>
  );
};
export default Navigation;
