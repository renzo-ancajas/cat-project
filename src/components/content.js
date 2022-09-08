import Cat from "./cats";

const Content = ({cats, setCats}) => {
  if (cats.length > 10) {
    return(
      <p>
        Too many matches, specify search
      </p>
    )
  } else if ((cats.length > 2 && cats.length < 10) || cats.length === 0) {
    return (
      <ul>
        {cats.map((cat, i ) => 
          <li key={i}>{cat.name} <button onClick={() => setCats([cat])}>show</button></li>
        )}
      </ul>
    )
  } else {
    return (
      <Cat cat={cats[0]}/>
    )
  }
}

export default Content