import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function ArtistView() {
    const [ artistData, setArtistData ] = useState([])

    const { id } = useParams()
    
    useEffect(() => {   
        const fetchData = async () => {
            const url = `http://localhost:4000/album/${id}`
            const response = await fetch(url)
            const data = await response.json()

            const albums = data.results.filter(item => item.collectionType === 'Album')
            setArtistData(albums)
        }

        fetchData()
    }, [id])

    const albumDisplay = artistData.map(album => {
        return (
            <div key={album.collectionId}>
                <Link to={`/album/${album.collectionId}`}>
                <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <p>Artist Data Goes Here!</p>
            <h2>The id passed was: {id}</h2>
            {albumDisplay}
        </div>
    )
}

export default ArtistView