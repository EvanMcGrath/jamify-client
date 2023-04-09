import useAuth from "../../utils/useAuth";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SpotifyPlayer from 'react-spotify-web-playback'
import PlaylistMenu from "../PlaylistMenu/PlaylistMenu";

const Dashboard = ({ code, myInfo, setMyInfo, setPlaylists, playlists }) => {

    const accessToken = useAuth(code)


    useEffect(() => {

        if (!accessToken) return
        axios.post('http://localhost:3100/userInfo/me', { "access_token": accessToken })
            .then((res) => {
                setMyInfo(res.data[0].username)
            })
            .catch((err) => {
                console.log(err)
            });

    }, [accessToken])

    useEffect(() => {
        axios.post('http://localhost:3100/playlist', { "access_token": accessToken })
            .then((res) => {
                setPlaylists(res.data)
            })
            .catch((err) => {
                console.log(err)
            });

    }, [myInfo])
    
    return (
        <>
            <PlaylistMenu playlists={playlists} /> 

            <SpotifyPlayer
                token={accessToken}
                uris={['spotify:playlist:37i9dQZF1DZ06evO1DHoaY']}
            />;

        </>
    )
}

export default Dashboard;