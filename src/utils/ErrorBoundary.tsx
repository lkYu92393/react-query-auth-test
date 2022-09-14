import React, { useState } from 'react';

type ErrorProp = {
    children: JSX.Element,
    errorComponent: JSX.Element
};

const ErrorBoundary = ({children, errorComponent}: ErrorProp) => {
    const [error, setError] = useState(false);
    const getDerivedErrorComponent = (error: any) => {
        setError(true);
    }
    const componentDidCatch = (error: any, errorInfo: string) => {
        console.log(error, errorInfo)
    }
    
    return error ? errorComponent : children;
}

export default ErrorBoundary;