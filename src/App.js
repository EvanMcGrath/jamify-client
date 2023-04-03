import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const code = new URLSearchParams(window.location.search).get('code')

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <LandingPage code={code} /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
