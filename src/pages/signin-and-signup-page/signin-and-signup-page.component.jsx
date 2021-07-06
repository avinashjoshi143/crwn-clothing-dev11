import React from 'react';

import SignIn from '../../components/signin/signin.component';


import SignUp from '../../components/signup/signup.component';

import { SignInAndSignUpPageContainer } from './signin-and-signup-page.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpPageContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpPageContainer>
);

export default SignInAndSignUpPage;