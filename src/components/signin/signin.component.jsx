import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';

import {SignInContainer,
    SignInTitle,
    CustomButtonContainer} from './signin.styles';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email : "",
            password : ""
        }
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;

        try {

            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"",password:""});
            
        } catch(error) {
            console.error(error);
        }

    }

    render() {
        return(
            <SignInContainer className="signin">
                <SignInTitle> I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email"
                    name="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label = "email"
                    required
                    />

                    <FormInput 
                    type="password"
                    name="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label="password"
                    required
                    />
                    <CustomButtonContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </CustomButtonContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;