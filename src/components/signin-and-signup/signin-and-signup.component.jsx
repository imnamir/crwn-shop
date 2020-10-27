import React from 'react';
import { SignUp } from '../sign-up/sign-up.component';

import SignIn from '../signin/signin.component';
import './signin-and-signup.styles.scss';
const SignInSignUp = () => {
    return(
      <div className="sign-in-and-sign-up">
          <SignIn />
          <SignUp />
      </div>
    )
}

export default SignInSignUp;