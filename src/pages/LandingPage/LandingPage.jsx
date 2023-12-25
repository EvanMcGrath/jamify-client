import './LandingPage.scss'
import Login from '../../components/Login/Login'
import Logo from '../../assets/jamify.png'

const LandingPage = () => {
    return (
        <main className="landing">
            <header className="landing__header">Jamify</header>
            <Login />
            <footer className="landing__footer">
                <div className="landing__logo-container">
                    <img className="landing__logo" src={Logo} />
                </div>
            </footer>
        </main>
    )
}

export default LandingPage;