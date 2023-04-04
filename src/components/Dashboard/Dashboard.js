import React from "react";
import useAuth from "../../utils/useAuth";
import { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = ({ code }) => {

    const [myInfo, setMyInfo] = useState();
    const accessToken = useAuth(code)


    useEffect(() => {
        if (!accessToken) return
        axios.post('http://localhost:3100/me', {
            "access_token": `${accessToken}`
        })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [accessToken])

    
    return (
        <>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


            {/* <div>{code}</div>
            <br /> 
            <br /> 
            <br /> */}
            <div>{accessToken ? accessToken : "null"}</div> */}
        </>
    )
}

export default Dashboard;