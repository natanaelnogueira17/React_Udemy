import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React com Css</h1>
      <p>este é um paragrafo do meu app</p>
      <MyComponent/>
        
    </>
  )
}

export default App
