import React from 'react';

const LoginSuccess = (user: Record<string, any>) => { 
    return (
    <div>
        Welcome, {user.user.name}
    </div>
    )
};

export default LoginSuccess;