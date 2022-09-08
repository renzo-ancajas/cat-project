import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/content'
import Search from './components/search'


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
    if(search) {
      const searchCat = new RegExp( search, 'i')
      const searchedCat = () => allCats.filter(cat => cat.name.match(searchCat))
      setCats(searchedCat)
    }
  }

  return (
    <div>
      <Search value={search} onChange={handleSearchChange}/>
      <Content cats={cats} setCats={setCats}/>
    </div>
  )
}

export default App;