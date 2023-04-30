import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Component/Header/Header'
import { About } from './Component/About/About'
import { Skills } from './Component/Skills/Skills'
import { Social } from './Component/Social/Social'
import { GenerateButton } from './Component/GenerateButton/GenerateButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Social/>
    <GenerateButton/>
    </>
  )
}

export default App
