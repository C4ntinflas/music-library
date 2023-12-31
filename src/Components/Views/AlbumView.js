import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])
    
    const { id } = useParams ()
    
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:4000/song/${id}`
            const response = await fetch(url)
            const data = await response.json()

            const songs = data.results.filter(item => item.wrapperType === 'track')
            setAlbumData(songs)
        }

        fetchData()
    }, [id])

const songDisplay = albumData.map(song => {
    return (
        <div key={song.trackId}>
            <p>{song.trackName}</p>
        </div>
    )
})

const navButtons = () => {
    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>

            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

    return (
        <div>
            {navButtons()}
            <p>Album Data Goes Here!</p>
            <h2>The id passed was: {id}</h2>
            {songDisplay}
        </div>
    )
}

export default AlbumView