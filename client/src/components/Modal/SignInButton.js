/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SignUp from "../LogIn/SignUp.js";
import LoginForm from "../LogIn/LoginForm.js";
import Login from "../LogIn/Login.jsx";

const SignIn = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div>
      <Button color="" onClick={toggle}>
        {"SignIn"}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>LogIn Form</ModalHeader>
        <ModalBody>
         <Login></Login>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>SignUp</ModalHeader>
            <ModalBody>
              <SignUp></SignUp>
            </ModalBody>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggleNested}>
            SignUp
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignIn;
