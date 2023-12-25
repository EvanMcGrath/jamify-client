import React, { useEffect, useState } from "react";
import './SongList.scss'
import { Link, useParams } from "react-router-dom";
import { accessToken } from '../../utils/spotify'
import axios from "axios";

const SongList = () => {
    const { id } = useParams();

    const [ songs, setSongs ] = useState('')
    const [ playlistName, setPlaylistName ] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3100/playlist/${id}`, { params: { accessToken }})
            .then((res) => {
                setPlaylistName(res.data.playlistName)
                setSongs(res.data.tracks)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <header className="menu-header">
                <h1 className="menu-header__title">
                    <Link className="menu-header__link" to='/' >{ playlistName }</Link>
                </h1>
                <div className="menu-header__logo">Logo</div>
            </header>
            <main>
                <ul className="song-list">
                    { songs ? songs.map((i) => {
                        return <li className="song-list__item" >
                            <Link className="song-list__link" to={`/player/${i.trackUri}/${id}`}>
                                <div className="song-list__track" >
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