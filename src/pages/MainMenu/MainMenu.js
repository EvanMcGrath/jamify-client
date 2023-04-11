import Dashboard from '../../components/Dashboard/Dashboard'
import { accessToken } from '../../utils/spotify'
import './MainMenu.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu'

const MainMenu = () => {

    const [myInfo, setMyInfo] = useState();
    const [playlists, setPlaylists] = useState();


    useEffect(() => {
        // if (!accessToken) return
        axios.post('http://localhost:3100/userInfo/me', { "accessToken": accessToken })
            .then((res) => {
                setMyInfo(res.data[0].username)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [accessToken])

    useEffect(() => {
        axios.post('http://localhost:3100/playlist', { "accessToken": accessToken })
            .then((res) => {
                setPlaylists(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [myInfo])
    

    return (
        <>
            <header className="menu-header"> 
                <h1 className="menu-header__title">
                    { myInfo ? myInfo + "'s " : null }playlists
                </h1>
                <div className="menu-header__logo">Logo</div>
            </header>
            
            <PlaylistMenu playlists={playlists} />

            {/* <Dashboard setMyInfo={setMyInfo} setPlaylists={b} /> */}
        </>
    )
}

export default MainMenu;