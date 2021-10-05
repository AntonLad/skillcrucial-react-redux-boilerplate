import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [counter, setCounterNew] = useState(0)
  const [user, setUser] = useState('')

  return (
    <div>
      <Head title="Hello" />
      <img alt="wave" src="images/wave.jpg" />
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div>
        Hello World Dashboard {counter}
        <Link to="/"> Go to Root </Link>
        <a href="/"> Go to Root Link </a>
      </div>

      <div>
        <Head title="Dashboard" />
        <div className="flex flex-row justify-center w-full p-4">
          <div className="flex flex-col justify-center items-center w-1/2 bg-yellow-300 border rounded-md font-bold p-4">
            Enter your name:
            <input type="text" onChange={(e) => setUser(e.target.value)} value={user} />
            <Link
              className="p-2 m-2 bg-indigo-400 rounded-md font-semibold text-white"
              type="button"
              to={`/${user}`}
            >
              Go to...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
