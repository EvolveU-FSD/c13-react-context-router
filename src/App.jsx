import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import TractorsPage from './pages/TractorsPage'
import MyProjectPage from './pages/MyProjectPage'
import LoginPage from './pages/LoginPage'
import { WhenLoggedIn, WhenNotLoggedIn, WithLogin } from './LoginContext'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <WithLogin >
        <WhenNotLoggedIn>
          <Routes>
            <Route path="my-project" element= { <LoginPage /> } />
          </Routes>
        </WhenNotLoggedIn>
        <WhenLoggedIn>
          <Routes>
            <Route path="my-project" element= { <MyProjectPage /> } />
            <Route path="login" element = { <Navigate to='/' /> } />
          </Routes>
        </WhenLoggedIn>
        <Routes>
          <Route index element={ <HomePage /> }/>
          <Route path="tractors" element= { <TractorsPage /> } />
          <Route path="login" element= { <LoginPage /> } />
          <Route path="*" element={ <Navigate to='/' />} />
        </Routes>
      </WithLogin>
    </BrowserRouter>
  )
}

export default App
