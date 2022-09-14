import React from 'react';
import { useQuery } from 'react-query';

import {useAuth} from "../lib/auth";

import axios from "../lib/axios";
import LoginForm from './LoginForm';
import LoginSuccess from './LoginSuccess';

const Login = () => {
    const { user, logout } = useAuth();
   return (
       user? <LoginSuccess user={user} /> : <LoginForm />
   )
};

export default Login;