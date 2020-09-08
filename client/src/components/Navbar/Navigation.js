import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import SignIn from "../LogIn/SignIn";

const Navigation = () => {
  const [parentPage, setParentPage] = useState(false);
  const [teacherPage, setTeacherPage] = useState(false);

  const showParentPage = () => {
    setParentPage(true);

  }
  return (
    <>
      <Navbar bg="#11ffee00" variant="light">
        <SignIn></SignIn>
      </Navbar>
    </>
  );
};
export default Navigation;
