import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import TractorsPage from './pages/TractorsPage'
import MyProjectPage from './pages/MyProjectPage'
import LoginPage from './pages/LoginPage'
import LoginContext from './LoginContext'

function App() {

  const [user, setUser] = useState()
  const [page, setPage] = useState("Home")

  return (
    <LoginContext.Provider value={ {user, setUser} } >
      { page === "Login" && <LoginPage setPage={setPage} />}
      { page === "Home" && <HomePage setPage={setPage} />}
      { page === "Tractors" && <TractorsPage setPage={setPage} />}
      { page === "MyProject" && <MyProjectPage setPage={setPage} />}
    </LoginContext.Provider>
  )
}

export default App
