import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import RestSignUp from "./Screens/RestSignUp";
import Header from './Screens/Header';
import Dashboard from './Screens/Dashboard';
import { signIn } from './Store/Action/authAction';

class App extends React.Component {
  constructor() {
    super();
  this.state = {
      showDashBoard: false
    }
    console.log('state===>', this.state)
  }
  render() { 
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/restsignup" component={RestSignUp} />
      </Switch>
    </div>
    </BrowserRouter>

  );
  }
}

export default App;