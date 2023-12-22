import MainMenu from './pages/MainMenu/MainMenu';
import SongList from './pages/SongList/SongList'
import LandingPage from './pages/LandingPage/LandingPage';
import PlayerPage from './pages/PlayerPage/PlayerPage'
import { accessToken } from './utils/spotify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
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
