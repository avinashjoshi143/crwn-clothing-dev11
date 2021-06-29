import React from 'react';

import SignIn from '../../components/signin/signin.component';

import './signin-and-signup-page.styles.scss';

import SignUp from '../../components/signup/signup.component';

const SignInAndSignUpPage = () => (
    <div className="signin-and-signup-page">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;