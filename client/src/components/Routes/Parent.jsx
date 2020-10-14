import React, { useState,useEffect } from "react";
import ParentReport from "../Modal/ParentReport";
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import storage from "../Firebase/FbCredentials";

// change into functional component
const ParentPortal=()=>{
  const [data,setData]=useState [{}]
  // can use useEffect
 const useEffect=(() => {
   const data = storage.ref(`/image/`)
   return () => {
    
   }
 }, [data])
    return (
      <>
          <Card text-center style={{ width: "18rem" }}>
            <CardImg
              top
              src={data}
              alt="Card image cap"
            />
            <CardBody className="text-center">
              <CardTitle>{"Student Name"}</CardTitle>
              <ParentReport></ParentReport>
            </CardBody>
          </Card>
        
      </>
    );
  };

  export default ParentPortal;