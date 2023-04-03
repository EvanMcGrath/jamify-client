import './LandingPage.scss'
import Login from '../../components/Login/Login'

const LandingPage = () => {

    return (
        <main className="landing">
            <header className="landing__header">Jamify</header>
                <Login />
            <footer className="landing__footer">
                <div>Logo</div>
            </footer>
        </main>
    )
}

export default LandingPage;