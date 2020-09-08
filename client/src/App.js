import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Images/Background.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/teacherPortal" component={TeacherPortal} />
        <Route exact path="/parentPortal" component={ParentPortal} />
      </BrowserRouter>
    </div>
  );
}
export default App;
