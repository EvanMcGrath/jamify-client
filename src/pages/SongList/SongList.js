import React, { useEffect, useState } from "react";
import './SongList.scss'
import { Link, useParams } from "react-router-dom";
import SpotifyPlayer from  'react-spotify-web-playback'
import { accessToken, logout } from '../../utils/spotify'
import axios from "axios";

const SongList = () => {

    // console.log(token)

    const { id } = useParams();

    const [ songs, setSongs ] = useState('')
    const [ playlistName, setPlaylistName ] = useState('')


    useEffect(() => {
        axios.get(`http://localhost:3100/playlist/${id}`)
            .then((res) => {
                // console.log(res.data)
                setPlaylistName(res.data.playlistName)
                setSongs(res.data.tracks)
                
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // console.log(songs)

    return (
        <>
            <header className="menu-header">
                <h1 className="menu-header__title">
                    { playlistName } 
                </h1>
                <div className="menu-header__logo">Logo</div>
            </header>
            <main>
                <ul className="song-list">
                    { songs ? songs.map((i) => {
                        return <li className="song-list__item" >
                            <Link className="song-list__link" to={`/player/${i.trackUri}`}>
                                <div className="song-list__track">
                                    <span className="song-list__song-name">{i.trackName}</span><span className="song-list__artist">{i.artistName}</span>
                                </div>
                                <span className="song-list__key">length/key</span>
                            </Link>
                        </li>
                    }) : "null" } 
                </ul>
            </main>
        </>
    )
}

export default SongList;