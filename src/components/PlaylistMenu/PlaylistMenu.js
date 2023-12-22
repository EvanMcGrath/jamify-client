import React from 'react'
import './PlaylistMenu.scss'
import { Link } from 'react-router-dom'
import gradient from 'random-gradient'

const PlaylistMenu = ({ playlists }) => {
    let key = 0
    
    return (
        <>
        <ul className="playlist-list">
            { playlists ? playlists.map((list) => {
                const bgGradient = {background: gradient(`${Math.random()}`)}
                return <>
                    <li className="playlist-list__item" style={bgGradient} key={key++}>
                        <Link className="playlist-list__link" to={`/songlist/${list._id}`} >{list.playlistName}</Link>
                    </li>
                </>
            }) : null}
        </ul>
        </>
    )
}

export default PlaylistMenu;