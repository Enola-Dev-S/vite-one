// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Register from './Register'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
