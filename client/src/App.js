import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Images/Background.css";
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/teacherPortal" component={TeacherPortal} />
        <Route exact path="/parentPortal" component={ParentPortal} />
      </Router>
    </div>
  );
}
export default App;
