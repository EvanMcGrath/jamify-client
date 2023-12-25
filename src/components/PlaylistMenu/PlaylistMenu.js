import React from 'react'
import './PlaylistMenu.scss'
import { Link } from 'react-router-dom'
import gradient from 'random-gradient'

const PlaylistMenu = ({ playlists }) => {
    return (
        <>
        <section className="playlist-list">
            { playlists ? playlists.map((list) => {
                const bgGradient = {background: gradient(`${Math.random()}`)}
                return <>
                    <Link className="playlist-list__item" to={`/songlist/${list._id}`} style={bgGradient} key={list._id}>
                        <span className="playlist-list__link">{list.playlistName}</span>
                    </Link>
                </>
            }) : null}
        </section>
        </>
    )
}

export default PlaylistMenu;