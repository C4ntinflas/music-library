import { useState, useEffect } from 'react'
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Galllery/Gallery'


function App() {
  const  [search, useSearch] = useState('')
  const [message, useMessage] = useState('Search for Music')
  const [data, useData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const url = encodeURI('https://itunes.apple.com/search?term=jon%20bellion')
      const response = await fetch(url)
      const data = await response.json()
    }
    fetchData()
  })
  return (
    <div>
      <SearchBar/>
      {message}
      <Gallery/>
    </div>
  );
}

export default App;
