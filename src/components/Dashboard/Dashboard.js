import React, { useSyncExternalStore } from "react";
import useAuth from "../../utils/useAuth";
import { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = ({ code, setMyInfo }) => {

    const [playlists, setPlaylists] = useState();

    const accessToken = useAuth(code)


    useEffect(() => {
        if (!accessToken) return

        axios.post('http://localhost:3100/me', { "access_token": `${accessToken}` })
            .then((res) => {
                setMyInfo(res.data.body)
            })
            .catch((err) => {
                console.log(err)
            });

        axios.post('http://localhost:3100/playlists', { "access_token": `${accessToken}` })
            .then((res) => {
                console.log(res.data.items)
                setPlaylists(res.data.items)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [accessToken])

    let key = 0
    
    return (
        <>
            <ul>
                { playlists ? playlists.map((list) => {
                    return <li key={key++}>{list.name}</li>
                }) : null }
            </ul>


            {/* <div>{code}</div>
            <br /> 
            <br /> 
            <br /> */}
            {/* <div>{accessToken ? accessToken : "null"}</div>  */}
        </>
    )
}

export default Dashboard;