import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home-page.component';
import SignInSignUp from './components/signin-and-signup/signin-and-signup.component';
import Shop from './pages/shop/shop.component';

import {auth, CreateUserProfile} from './firebase/firebase-util';
import { setCurrentUser } from './redux/user/userAction';
import { connect } from 'react-redux';

class App extends React.Component {
  
  unSubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const userRef = await CreateUserProfile(user);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
         
        })
      } else {
        setCurrentUser(user)
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />) : <SignInSignUp /> } ></Route>
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
