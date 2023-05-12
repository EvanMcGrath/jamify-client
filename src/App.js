import MainMenu from './pages/MainMenu/MainMenu';
import SongList from './pages/SongList/SongList'
import LandingPage from './pages/LandingPage/LandingPage';
import PlayerPage from './pages/PlayerPage/PlayerPage'
import useAuth from './utils/useAuth'
import { accessToken, logout } from './utils/spotify'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  // const [ token, setToken ] = useState(null)

  // useEffect(() => {
  //   setToken(accessToken);
  // }, [accessToken])

  ///// Get code from url 
  // const code = new URLSearchParams(window.location.search).get('code')

  // const accessToken = useAuth(code)  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ !accessToken ? <LandingPage /> : <MainMenu  /> } />
          <Route path="/songlist/:id" element={<SongList />} />
          <Route path="/player/:id/:playlistId" element={ <PlayerPage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
