import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInGoogle } = useAuth()
    return (
        <div className='header'>
            <div>
                <h2>Please Login</h2>
                <button onClick={signInGoogle}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;