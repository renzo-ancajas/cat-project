import React, { useState, useEffect } from 'react'
import axios from 'axios';


const CAT_BREEDS_API_URL = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const API_KEY = process.env.REACT_APP_API_KEY;

const Cat = ({cat}) => {
  const [breed, setBreed] = useState([])


  const fetchData = async () => {
    await axios
    .get(`${CAT_BREEDS_API_URL}`)
    .then(response => {
      const apiRes = response.data
      console.log(`Current breed selected is ${apiRes.id}`)
      setBreed([apiRes])
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
const { name: breedName, temperment, icon} = cat
return (
  <div>
    <h1>{breedName}</h1>
    <h2>Temperment:</h2>
    <ul>
      {temperment.map(temper => <li key={temperment.name}>{temperment.name}</li>)}
    </ul>
    <img src={icon} style={{ width: "500px"}} alt="Cat Icon"></img>
  </div>
)
}