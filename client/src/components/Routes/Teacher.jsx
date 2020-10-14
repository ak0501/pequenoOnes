import React, { useEffect, useState } from "react";
import StuCard from "../Card/Card";



const TeacherPortal = () => {
  const data ={
    fName:"avi",
    lName:"khanal"
  }
  
  
  return (
    <div className="container-fluid d-flex justify-content-center pr-3">
      {students.map((student) => {
        return (
          <StuCard
            id={student._id}
            firstName={student.firstName}
            lastName={student.lastName}
            parent1={student.parent1}
            parent2={student.parent2}
            notes={student.notes}
          />
        );
      })}
    </div>
  );
};

export default TeacherPortal;
