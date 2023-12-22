import { accessToken } from '../../utils/spotify'
import './MainMenu.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu'

const MainMenu = () => {

    const [myInfo, setMyInfo] = useState();
    const [playlists, setPlaylists] = useState();


    useEffect(() => {
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
                <div className="menu-header__logo">Logo</div>
            </header>
            
            <PlaylistMenu playlists={playlists} />
        </>
    )
}

export default MainMenu;