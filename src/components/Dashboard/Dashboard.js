import useAuth from "../../utils/useAuth";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SpotifyPlayer from 'react-spotify-web-playback'


const Dashboard = ({ code, setMyInfo, setPlaylists }) => {

    const accessToken = useAuth(code)
    
    

    useEffect(() => {
        if (!accessToken) return

        axios.post('http://localhost:3100/userInfo/me', { "access_token": accessToken })
            .then((res) => {
                
                setMyInfo(res.data[0].username)
                setPlaylists(res.data[0].playlists)
            })
            .catch((err) => {
                console.log(err)
            });

    }, [accessToken])

    
    return (
        <>

            <SpotifyPlayer
                token={accessToken}
                uris={['spotify:playlist:37i9dQZF1DZ06evO1DHoaY']}
            />;

        </>
    )
}

export default Dashboard;