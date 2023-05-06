import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Component/Header/Header'
import { Home } from './Component/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Markdown } from './Component/MarkDown/Markdown'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Markdown' element={<Markdown />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
