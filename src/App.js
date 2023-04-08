import MainMenu from './pages/MainMenu/MainMenu';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const code = new URLSearchParams(window.location.search).get('code')

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ code ? <MainMenu code={code} /> : <LandingPage /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
