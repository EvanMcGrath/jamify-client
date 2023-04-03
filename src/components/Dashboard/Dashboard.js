import React from "react";
import useAuth from "../../utils/useAuth";

const Dashboard = ({ code }) => {

    const accessToken = useAuth(code)

    return (
        <>
            <div>{code}</div>
            <br /> 
            <br /> 
            <br />
            <div>{accessToken ? accessToken : "null"}</div>
        </>
    )
}

export default Dashboard;