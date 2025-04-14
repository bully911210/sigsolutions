import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true)
    console.log('App component mounted successfully')
  }, [])

  return (
    <div className="app-container">
      <h1>SIG Solutions</h1>
      <p>Welcome to our website!</p>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {isLoaded ? 'Website loaded successfully!' : 'Loading...'}
        </p>
      </div>
    </div>
  )
}

export default App
