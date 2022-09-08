import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [cats, setCats] = useState([])
  const [allCats, setAllCats] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      console.log('cats lock and loaded (promised fulfilled)')
      setAllCats(response.data)
    })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    if(search)  {
      const regex = new RegExp( search, 'i')
      const searchCat = () => allCats.filter(cat => cat.breed.match(regex))
      setCats(searchCat)
    }
  }

  return (
    <div>
      
    </div>
  )
}

export default App;