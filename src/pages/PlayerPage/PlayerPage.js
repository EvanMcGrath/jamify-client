import SpotifyPlayer from  'react-spotify-web-playback'
import { accessToken } from '../../utils/spotify'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


const PlayerPage = () => {
    
const {id} = useParams()

useEffect(() => {
    axios.get('http://localhost:3100/song')
        .then(() => {

        })
        .catch(() => {

        })
}, [])

console.log(id)
console.log(accessToken)



    return (
        <>
            <SpotifyPlayer token={ accessToken } uris={[]}/>   
        </>
    )
}   

export default PlayerPage;