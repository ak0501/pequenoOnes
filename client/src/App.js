import React from "react";
import "./App.css";
import "./components/Images/Background.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './components/Routes/SignIn';
import SignUp from './components/Routes/SignUp';
import Home from './components/Routes/Home';
import Teacher from './components/Routes/Teacher';
import Parent from './components/Routes/Parent';
import { AuthProvider } from "./components/Firebase/AuthProvider";


function App() {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/parent" component={Parent} />
        </Switch>
      </Router>
    </AuthProvider>



  );
}
export default App;
