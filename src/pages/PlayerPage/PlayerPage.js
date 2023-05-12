import SpotifyPlayer from 'react-spotify-web-playback';
import { accessToken } from '../../utils/spotify';
import { keyFinder, modeFinder } from '../../utils/keyFinder';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlayerPage.scss'
import Logo from '../../assets/jamify.png'



const PlayerPage = () => {

    const { id } = useParams();
    const { playlistId } = useParams();

    console.log(playlistId)

    const [trackInfo, setTrackInfo] = useState()

    useEffect(() => {
        axios.get('http://localhost:3100/song', { params: { accessToken, songUri: id } })
            .then((res) => {
                setTrackInfo(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [id])

    


    if (!trackInfo) {
        return <div>Loading</div>
    }


    return (
        <>
            <main className="player-page">
            <h1><Link className="player-page__back" to={`/songlist/${playlistId}`}>&lt;&lt;</Link></h1>
            <h1><Link className="player-page__logo" to="/"><img className="player-page__img" src={Logo} /></Link></h1>
            <h2 className=""></h2>
                <img className="player-page__album-art" src={trackInfo.trackArt} alt="Album/track artwork" />
                
                <div className="player-page__music-info">
                    <div className="player-page__pitch">
                        <div className="player-page__key">{keyFinder(trackInfo.key)}</div>
                        <div className="player-page__mode">{modeFinder(trackInfo.mode)}</div>
                    </div>  
                    <h2 className="player-page__header">Key</h2>
                    <div className="player-page__tempo">{Math.floor(trackInfo.tempo)}</div>
                    <h2 className="player-page__header">Tempo</h2>
                </div>
                <SpotifyPlayer
                    styles={{
                        trackNameColor: '#e1dede',
                        sliderColor: '#AB14CC',
                        loaderColor: '#AB14CC',
                        sliderTrackColor: '#a9a3a3',
                        sliderHandleColor: '#a9a3a3',
                        color: '#a9a3a3',
                        bgColor: '#201e2486'
                    }}
                    className="player-page__player" hideCoverArt={true} token={accessToken} uris={[id]} />
            </main>
        </>
    )
}

export default PlayerPage;