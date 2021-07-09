import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';

import {SignInContainer,
    SignInTitle,
    CustomButtonContainer} from './signin.styles';

const SignIn = ()=> {
    const[userCredential,setUserCredential] = useState({email:'',password:''});
    const {email,password} = userCredential;

    const handleChange = event => {
        const {value,name} = event.target;
        setUserCredential({...userCredential,[name]:value})
    }
     
    const handleSubmit = async event => {
        event.preventDefault();

        try {

            await auth.signInWithEmailAndPassword(email,password);
            setUserCredential({...userCredential,email:"",password:""});
            
        } catch(error) {
            console.error(error);
        }

    }

        return(
            <SignInContainer className="signin">
                <SignInTitle> I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    label = "email"
                    required
                    />

                    <FormInput 
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    value={password}
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

export default SignIn;