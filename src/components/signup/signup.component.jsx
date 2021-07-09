import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component'

import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


import {SignUpContainer,
    SingUpTitle} from './signup.styles';

const SignUp = ()=> {

    const [userCredential,setUSerCredential] = useState({
        email:"",
        displayName:"",
        password:"",
        confirmPassword:""
    });
    const {displayName, email, password, confirmPassword} = userCredential;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert(`password don't match`);
            return
        }
        else {
            try {

                const {user} = await auth.createUserWithEmailAndPassword(email,password);

                await createUserProfileDocument(user,{displayName});

                setUSerCredential({
                    ...userCredential,
                    email:"",
                    displayName:"",
                    password:"",
                    confirmPassword:""
                })

            } catch(error) {
                console.error(error);
            }
        }  
    };

    const handleChange = event => {
        const {name,value} = event.target;
        setUSerCredential({...userCredential,[name]:value});
    }
        return(
            <SignUpContainer>
                    <SingUpTitle>I do not have account</SingUpTitle>
                    <span>signup with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                    />
                    <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                    />
                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                    />
                    <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
export default SignUp;