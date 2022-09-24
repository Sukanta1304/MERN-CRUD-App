import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Notes from './components/Notes'
import Addnotes from './components/Addnotes'
import Editnote from './components/Editnote'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/addnotes" element={<Addnotes/>}/>
        <Route path="/edit/:noteId" element={<Editnote/>}/>
      </Routes>
    </div>
  )
}

export default App
