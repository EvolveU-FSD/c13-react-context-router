import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import TractorsPage from './pages/TractorsPage'
import MyProjectPage from './pages/MyProjectPage'
import LoginPage from './pages/LoginPage'
import { WithLogin } from './LoginContext'

function App() {

  const [page, setPage] = useState("Home")

  return (
    <WithLogin >
      { page === "Login" && <LoginPage setPage={setPage} />}
      { page === "Home" && <HomePage setPage={setPage} />}
      { page === "Tractors" && <TractorsPage setPage={setPage} />}
      { page === "MyProject" && <MyProjectPage setPage={setPage} />}
    </WithLogin>
  )
}

export default App
