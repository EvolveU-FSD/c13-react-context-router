import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import TractorsPage from './pages/TractorsPage'
import MyProjectPage from './pages/MyProjectPage'
import LoginPage from './pages/LoginPage'

function App() {

  const [user, setUser] = useState()
  const [page, setPage] = useState("Home")

  return (
    <>
      { page === "Login" && <LoginPage setPage={setPage} setUser={setUser}/>}
      { page === "Home" && <HomePage setPage={setPage} user={user}/>}
      { page === "Tractors" && <TractorsPage setPage={setPage} user={user}/>}
      { page === "MyProject" && <MyProjectPage setPage={setPage} user={user}/>}
    </>
  )
}

export default App
