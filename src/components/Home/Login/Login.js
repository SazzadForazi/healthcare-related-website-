import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {

    const { signInGoogle } = useAuth()
    const { handleRegistration, handlePasswordChange, handleEmailChange, error } = useAuth()

    return (

        <div classNameName='header mx-5'>


            <form onSubmit={handleRegistration} className="row g-3">
                <h5>Please Register</h5>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4" required />
                </div>
                <br />
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword4" required />
                    <div className='row mb-3 text-danger'>{error}</div>

                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
            <br />
            <br />
            <div>-------------------or---------------------</div>
            <br />

            <div>
                <h5>Please Google SignIn</h5>
                <button onClick={signInGoogle} className="btn btn-primary">Google SignIn</button>
            </div>
            <br />
            <br /><br /><br /><br /><br />
        </div>

    );
};

export default Login;