import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login with google</h2>
            Don't have account! <Link to="/create-account">Create account</Link>
        </div>
    );
};

export default Login;