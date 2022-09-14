import React, { useState } from 'react';
import { LoginCredentials, useAuth } from "../lib/auth";

const LoginForm = (action: any) => {
    const {login} = useAuth();
    const [values, setValues] = useState<LoginCredentials>({email: "", password: ""});
    const [error, setError] = useState(null);

    return (
        <>
        {error && (
        <div>Error occured.</div>
        )}
        <div>
            <form onSubmit={async e => {
                setError(null);
                e.preventDefault();
                try {
                    if (values) {
                        await login(values);
                    }
                } catch (err: any) {
                    setError(err);
                }
            }}>
                <label>Email</label>
                <input name="email" type="text" value={values?.email} 
                onChange={e => {
                    setValues({email: e.target.value, password: values.password});
                    }
                }/>
                <br />
                <label>Password</label>
                <input name="password" type="text" value={values?.password} 
                onChange={e => {
                    setValues({email: values.email, password: e.target.value});
                    }
                }/>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>

        </>
);}

export default LoginForm;
