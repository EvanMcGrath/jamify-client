import Login from '../components/Login/Login'
import Dashboard from '../components/Dashboard/Dashboard'

const LandingPage = ({ code }) => {

    return (
        <>
            {code ? <Dashboard code={code} /> : <Login />}
            <div>Hiya.</div>
        </>
    )
}

export default LandingPage;