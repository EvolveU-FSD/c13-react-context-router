import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import TractorsPage from './pages/TractorsPage'
import MyProjectPage from './pages/MyProjectPage'
import LoginPage from './pages/LoginPage'
import { WithLogin } from './LoginContext'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <WithLogin >
        <Routes>
          <Route index element={ <HomePage /> }/>
          <Route path="tractors" element= { <TractorsPage /> } />
          <Route path="my-project" element= { <MyProjectPage /> } />
          <Route path="login" element= { <LoginPage /> } />
        </Routes>
      </WithLogin>
    </BrowserRouter>
  )
}

export default App
