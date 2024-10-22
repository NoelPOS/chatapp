import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Chat from './pages/chat/Chat'
import { useAuthContext } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'

function App() {
  const { authUser } = useAuthContext()
  return (
    <>
      <Routes>
        {/* <Route
          path='/'
          element={authUser ? <Home /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/login'
          element={authUser ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/signup'
          element={authUser ? <Navigate to='/' /> : <SignUp />}
        /> */}
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
