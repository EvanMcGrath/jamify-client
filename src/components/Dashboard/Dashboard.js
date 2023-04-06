import React, { useSyncExternalStore } from "react";
import useAuth from "../../utils/useAuth";
import { useEffect, useState } from 'react'
import axios from 'axios'
import SpotifyPlayer from 'react-spotify-web-playback'

const Dashboard = ({ code, setMyInfo }) => {

    const [playlists, setPlaylists] = useState();

    const accessToken = useAuth(code)


    useEffect(() => {
        if (!accessToken) return

        axios.post('http://localhost:3100/userInfo/me', { "access_token": accessToken })
            .then((res) => {
                setMyInfo(res.data.body)
                // setPlaylists()
            })
            .catch((err) => {
                console.log(err)
            });

        // axios.post('http://localhost:3100/userInfo/playlists', { "access_token": accessToken })
        //     .then((res) => {
        //         console.log(res.data.items)
        //         setPlaylists(res.data.items)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

    }, [accessToken])

    let key = 0

    return (
        <>
            <ul className="playlist-list">
                {playlists ? playlists.map((list) => {
                    return <>
                        <li className="playlist-list__item" key={key++}>{list.name}</li>
                        < br />
                        {list.tracks.href}
                        < br />
                    </>
                    }) : null }
            </ul>

            <SpotifyPlayer
                token={accessToken}
                uris={['spotify:playlist:37i9dQZF1DZ06evO1DHoaY']}
            />;

            {/* <div>{code}</div>
            <br /> 
            <br /> 
            <br /> */}
            {/* <div>{accessToken ? accessToken : "null"}</div>  */}
        </>
    )
}

export default Dashboard;