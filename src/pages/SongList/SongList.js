import React, { useEffect, useState } from "react";
import './SongList.scss'
import { useParams } from "react-router-dom";
import axios from "axios";

const SongList = () => {

    const { id } = useParams();

    const [ songs, setSongs ] = useState('')


    useEffect(() => {


        axios.get(`http://localhost:3100/playlist/${id}`)
            .then((res) => {
                console.log(res.data)
                setSongs(res.data.tracks)
                console.log(songs)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <header className="menu-header">
                <h1 className="menu-header__title">
                    Playlist Name
                </h1>
                <div className="menu-header__logo">Logo</div>
            </header>
            <main>
                <ul className="song-list">
                    { songs ? songs.map((i) => {
                        return <li className="song-list__item">
                            <div className="song-list__track">
                                <span>{i.trackName}</span><span>{i.artistName}</span>
                            </div>
                            <span>length/key</span>
                        </li>
                    }) : "null" } 
                </ul>
            </main>
        </>
    )
}

export default SongList;