import Dashboard from '../../components/Dashboard/Dashboard'
import useAuth from '../../utils/useAuth'
import './MainMenu.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu'

const MainMenu = ({ code }) => {

    const [myInfo, setMyInfo] = useState();
    const [playlists, setPlaylists] = useState();


    

    return (
        <>
            <header className="menu-header"> 
                <h1 className="menu-header__title">
                    { myInfo ? myInfo + "'s " : null }playlists
                </h1>
                <div className="menu-header__logo">Logo</div>
            </header>
            
            <PlaylistMenu playlists={playlists} />

            <Dashboard code={code} setMyInfo={setMyInfo} setPlaylists={setPlaylists} />
        </>
    )
}

export default MainMenu;