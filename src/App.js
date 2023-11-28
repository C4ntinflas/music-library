import { useState, useEffect } from 'react'
import { DataContext } from './contexts/DataContext'
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Galllery/Gallery'


function App() {
  const  [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music')
  const [data, setData] = useState([])
  
  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const data = await response.json()

        console.log(data);

        if (data.results.length > 0) {
          setData(data.results)
        } else {
          setData([])
          setMessage('Not Found')
        }
      }
  
      fetchData()
    }
  }, [search])

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
  );
}

export default App;
