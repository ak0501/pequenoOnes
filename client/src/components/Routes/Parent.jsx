import React, { Component } from "react";
import axios from "axios";
import ParentReport from "../Modal/ParentReport";
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import FbCredentials from "../Firebase/FbCredentials";

// change into functional component
export default class ParentPortal extends Component {
  state = {
    data: {},
    error: "",
  };

  // can use useEffect
  componentDidMount() {
    axios
      .get(`/users/login`)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <>
        {console.log(this.state.data)}
        {this.state.error !== "" && (
          <h1>
            {/* WOAH YOU SHOULD NOT BE HERE. CLICK <a href="/">HERE</a> TO GO BACK
            TO WHERE YOU SHOULD BE? */}
          </h1>
        )}
        {this.state.data !== {} && (
          <Card text-center style={{ width: "18rem" }}>
            <CardImg
              top
              src="https://via.placeholder.com/250"
              alt="Card image cap"
            />
            <CardBody className="text-center">
              <CardTitle>{"Student Name"}</CardTitle>

              <ParentReport></ParentReport>
            </CardBody>
          </Card>
        )}
        <button onClick={() => FbCredentials.auth().signOut()}>Sign out</button>
      </>
    );
  }
}
