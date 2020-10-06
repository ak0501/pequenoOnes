import React from "react";
import { Link } from "react-router-dom";
import FbCredentials from "../Firebase/FbCredentials";
import Button from 'react-bootstrap/Button'

let SignOut = () => {
    return (
      <>
  
          <Button className="sobutton" variant= "link" onClick={() => FbCredentials.auth().signOut()}>
            SignOut
          </Button>
        
      </>
    );
}

export default SignOut;