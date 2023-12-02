import { useState, useEffect } from 'react'
import { DataContext } from './context/DataContext'
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        const url = encodeURI(`http://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const resultData = await response.json()

        if (resultData.results.length > 0) {
          setData(resultData.results)
        } else {
          setData([])
          setMessage('Not Found')
        }
      } else {
        if (data) setData([])
      }
    }

    fetchData()
  }, [search], [data])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
        <SearchBar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  )
}

export default App
