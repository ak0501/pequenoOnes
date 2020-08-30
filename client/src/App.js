import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Images/Background.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TeacherPortal from "./Pages/TeacherPortal";
import ParentPortal from "./Pages/ParentPortal";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/teacherPortal" component={TeacherPortal} />
        <Route exact path="/parentPortal" component={ParentPortal} />
        {/* <Route exact path="/activities" component={Activities} /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
