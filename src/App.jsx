import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card'
//import Pagination from './components/pagination'
//import data from './data.json'

/* let sample_data = data.slice(0,10);
console.log(sample_data); */

function App() {
  const [dataBase, setDataBase] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const[hitsPerPage, setHitsPerPage] = useState(10)
  console.log(page)
  
  useEffect(() => {
    fetch(`https://634401cd2dadea1175b280ef.mockapi.io/Users`).then((response) => response.json()).then((output)=> setDataBase(output)).catch(() => {
      setError("Error: Fetching Failed");
    })
  }, [page, hitsPerPage])
  console.log(dataBase)
  let counter = 0;
  return (
    <div className="App">
      <h1> Database of awesome people on earth </h1>
    {dataBase.length
      ? dataBase.map((person) => {
        counter++;
          if ((counter >= page * 10 - 9) && (counter <= page * 10)) {
          return (
            <Card 
              {...person}
              key={person.id}
            />
          );
          }
        })
      : 'no users yet'}
      <ul className='pagination'>
        {[ ...Array(10)].map((_, i) => (
        <li onClick={() => setPage(i + 1)} className={page === (i + 1) ? "active" : ""}>{i + 1}</li>)
  )}
      </ul>

    </div>
  )
}

export default App
