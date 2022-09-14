import React from 'react';

import GitHubAnalytic from "./GitHubAnalytic";
import Login from "./Login";

type AppProp = {
    test: string,
    action: React.Dispatch<React.SetStateAction<string>>
};

const Landing = ({test, action}: AppProp) => { 
    return (
        <>
            <GitHubAnalytic />
            <Login />
        </>
    )
}

export default Landing;