import React, { useContext } from "react";
import "./App.css";

import "./components/Images/Background.css";
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";
import SignIn from './components/Routes/SignIn';
import SignUp from './components/Routes/SignUp';
import Home from './components/Routes/Home';
import Teacher from './components/Routes/Teacher';
import Parent from './components/Routes/Parent';

function App() {

  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/teacherPortal" component={Teacher} />
        <Route exact path="/parentPortal" component={Parent} />
      </Router>
    </div>
  );
}
export default App;
