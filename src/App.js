import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import LandingPage from './pages/LandingPage';

function App() {

  const code = new URLSearchParams(window.location.search).get('code')

  return (
    <div className="App">
      { code ? <Dashboard code={code} /> : <Login /> }
      <LandingPage />
    </div>
  );
}

export default App;
