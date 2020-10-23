import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';
import { signInWithGooogle } from '../../firebase/firebase-util';
import './signin.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        this.setState({email:'', password: ''})
        e.preventDefault();
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    render(){
        return (
            <div className="sign-in">
                <h1>I already have an Account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required/>
                    <div className="button">
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGooogle}>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;