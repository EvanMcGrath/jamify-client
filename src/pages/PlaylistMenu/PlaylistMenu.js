import Dashboard from '../../components/Dashboard/Dashboard'
import './PlaylistMenu.scss'

const PlaylistMenu = ({ code }) => {



    return (
        <>
            <header className="menu-header"> 
                <h1 className="menu-header__title">
                    Playlists
                </h1>
                <div className="menu-header__logo">Logo</div>
            </header>
            <Dashboard code={code} />
        </>
    )
}

export default PlaylistMenu;