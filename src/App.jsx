import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [books, setBooks] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", { headers: { Authorization: "whatever-you-want" } });
        setBooks(response.data.books)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])
  console.log(books)

  return (
    <>
      <div>
        {books?.map((data) => (
          <div key={data.id} id='main-container'>
            <h2>{data.title}</h2>

            <div id='box'>
              <div id='img-des'>

                <div>
                  <img src={data.imageLinks.thumbnail} alt="" />
                </div>

                <div>
                  <p id='description' >{data.description}</p>
                </div>

              </div>

              <h3>{data.authors.join(", ")}</h3>
            </div>

            <hr />

          </div>
        ))}
      </div>

    </>
  )
}

export default App
