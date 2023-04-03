import React from "react";
import { Link } from "react-router-dom";
import './Login.scss'


const Login = () => {

    return (
        <div className="login">
            <h2 className="login__subheader">Start your jam session.</h2>
            <Link className="login__button" to='http://localhost:3100/login' >Login</Link>
        </div>
    )
}

export default Login
