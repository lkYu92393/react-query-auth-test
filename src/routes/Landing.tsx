import React from 'react';

import {useAuth} from "../lib/auth";
import { useRoutes } from "react-router-dom";

import GitHubAnalytic from "../Contents/Annoymous/GitHubAnalytic";
import LoginForm from '../Contents/Annoymous/LoginForm';
import LoginSuccess from '../Contents/Auth/LoginSuccess';

type AppProp = {
    test: string,
    action: React.Dispatch<React.SetStateAction<string>>
};

const Landing = ({test, action}: AppProp) => { 
    const { user, logout } = useAuth();
    
//     const commonRoutes = [{ path: "/", element: <>
//     <GitHubAnalytic />
//     <LoginForm />
// </> }];
  
    // const element = user
    //               ? useRoutes([...commonRoutes])
    //               : useRoutes([...AuthRoute]);
    // return {element};
    return (
        user
        ? <LoginSuccess user={user} /> 
        : 
        <>
            <GitHubAnalytic />
            <LoginForm />
        </>
    )
}

export default Landing;