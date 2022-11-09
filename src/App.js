import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// // import pages
import Home from './pages/Home'
import Error from './pages/Error'
import LoginReg from './auth/LoginReg'
// import components
import Navbar from './components/Navbar'
import ForgetPassword from './auth/ForgetPassword'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='LoginReg' element={<LoginReg />} />
        <Route path='*' element={<Error />} />
        <Route path='ForgetPassword' element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
