import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Welcome,nameage} from './Welcome'
import './App.css'
import {Button} from './Button'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <h1>Codevoluation React component</h1>

  <Welcome name="Mohan"/>
  <nameage/>

  <Button/>
    </div>

  )
}

export default App
