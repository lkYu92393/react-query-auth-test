import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { AuthProvider } from '../lib/auth';

// import ErrorBoundary from "../utils/ErrorBoundary";
import queryClient from "../lib/react-query";

type AppProviderProps = {
    children: React.ReactNode;
    };

const ErrorComponent = () => {
    return (
    <h1>Something went wrong.</h1>
    )
};
    
const AppProvider = ({children} : AppProviderProps) => {
    return (
        <>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    {children}
                    <ReactQueryDevtools />
                </AuthProvider>
            </QueryClientProvider>
        </ErrorBoundary>
        </>
    );
}

export default AppProvider;