import Dashboard from '../../components/Dashboard/Dashboard'
import './PlaylistMenu.scss'
import { useState } from 'react'

const PlaylistMenu = ({ code }) => {

    const [myInfo, setMyInfo] = useState();

    return (
        <>
            <header className="menu-header"> 
                <h1 className="menu-header__title">
                    { myInfo ? myInfo.display_name + "'s " : null}playlists
                </h1>
                <div className="menu-header__logo">Logo</div>
            </header>
            <Dashboard code={code} setMyInfo={setMyInfo} />
        </>
    )
}

export default PlaylistMenu;