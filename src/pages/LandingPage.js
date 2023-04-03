import './LandingPage.scss'
import Login from '../components/Login/Login'
import Dashboard from '../components/Dashboard/Dashboard'

const LandingPage = ({ code }) => {

    return (
        <main className="landing">
            <header className="landing__header">Jamify</header>
            {code ? <Dashboard code={code} /> : <Login />}
            <footer className="landing__footer">
                <div>Logo</div>
            </footer>
        </main>
    )
}

export default LandingPage;