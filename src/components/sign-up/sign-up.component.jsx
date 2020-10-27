import React from 'react';

import CustomButton from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {auth, CreateUserProfile} from '../../firebase/firebase-util';

import './sign-up.styles.scss';

export class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('Password did not match!!')
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            CreateUserProfile(user, {displayName});
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(err) {
            console.log('some error', err)
        }
        

    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h1>I Don't have an Account</h1>
                <span>Create an account with your email and password!</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="Enter Your Name"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        label="Enter Your Email"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        label="Enter Your Password"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Enter Your Password"
                        handleChange={this.handleChange}
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}