import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './Register';
import Login from './Login'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Navigate to={'/login'}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App