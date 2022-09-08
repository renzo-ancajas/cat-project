import React, { useState, useEffect } from 'react'
import axios from 'axios';


const CAT_BREEDS_API_URL = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const API_KEY = process.env.REACT_APP_API_KEY;

const Cat = ({cat}) => {
  const [breed, setBreed] = useState([])
  const selectedBreed = breed.id


  const fetchData = async () => {
    await axios
    .get(`${CAT_BREEDS_API_URL}${selectedBreed}`)
    .then(response => {
      const apiRes = response.data
      setBreed([apiRes])
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
const { name: breedName, temperament, wikipedia_url, image, description} = cat
return (
  <div>
    <h1>{breedName}</h1>
    <img src={image.url} style={{ width: "300px"}} alt="Cat"></img>
    <p>Temperament:{temperament}</p>
    <p>Wiki Link: <a href="url">{wikipedia_url}</a></p>
    <p>{description}</p>
    {console.log(cat.image)}
  </div>
)
}

export default Cat