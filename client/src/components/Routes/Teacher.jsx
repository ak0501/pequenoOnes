import React, { useEffect, useState } from "react";
import StuCard from "../Card/Card";
import axios from "axios";
import app from "../Firebase/FbCredentials";


const TeacherPortal = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("/api/child").then((response) => {
      console.log(response);
      setStudents(response.data);
    });
  }, []);
  return (
    <div className="container-fluid d-flex justify-content-center pr-3">
      {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
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
