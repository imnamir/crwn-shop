import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home-page.component';
import SignInSignUp from './components/signin-and-signup/signin-and-signup.component';
import Shop from './pages/shop/shop.component';

import {auth, CreateUserProfile} from './firebase/firebase-util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      CreateUserProfile(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/signin" component={SignInSignUp}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
