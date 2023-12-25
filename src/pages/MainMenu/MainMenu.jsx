import Dashboard from '../../components/Dashboard/Dashboard'
import { accessToken, logout } from '../../utils/spotify'
import './MainMenu.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu'
import Logo from '../../assets/jamify.png'

const MainMenu = () => {

    const [myInfo, setMyInfo] = useState();
    const [playlists, setPlaylists] = useState();


    useEffect(() => {
        // if (!accessToken) return
        axios.get('http://localhost:3100/userInfo/me', { params: { accessToken }})
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
            <header className="menu-header"> 
                <h1 className="menu-header__title">
                    { myInfo ? myInfo + "'s " : null }playlists
                </h1>
                <div className="menu-header__log-wrapper">
                    <div className="menu-header__logo-container"><img className="menu-header__logo" src={Logo} /></div>
                    <div className="menu-header__logout" onClick={() => {logout()}}>Logout</div>
                </div>
            </header>
            
            <PlaylistMenu playlists={playlists} />
        </>
    )
}

export default MainMenu;