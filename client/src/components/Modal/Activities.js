import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "./Form";

function Activities(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Activities
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
          <Form id={props.id} />
        </Modal.Header>
      </Modal>
    </>
  );
}
export default Activities;
