import React from 'react';

import { useAuth } from "../lib/auth";

import GitHubAnalytic from "./Annoymous/GitHubAnalytic";
import LoginForm from './Annoymous/LoginForm';
import LoginSuccess from './Auth/LoginSuccess';

type AppProp = {
    test: string,
    action: React.Dispatch<React.SetStateAction<string>>
};

const Landing = ({test, action}: AppProp) => { 
    const Auth = useAuth();

    return (
        Auth.user
        ? <LoginSuccess user={Auth.user} /> 
        : 
        <>
            <GitHubAnalytic />
            <LoginForm />
        </>
    )
}

export default Landing;