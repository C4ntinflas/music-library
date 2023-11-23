import { useState } from 'react'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <input placeholder="Enter your search term here"/>
            <input type='submit'/>
        </div>
    )
}

export default SearchBar