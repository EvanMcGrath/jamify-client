import MainMenu from './pages/MainMenu/MainMenu';
import SongList from './pages/SongList/SongList'
import LandingPage from './pages/LandingPage/LandingPage';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  ///// Get code from url 
  const code = new URLSearchParams(window.location.search).get('code')

  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={code ? <MainMenu code={code} /> : <LandingPage />} />
          <Route path="/songlist/:id" element={<SongList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
