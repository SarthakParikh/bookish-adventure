import { useState } from 'react'

import './App.css'
import Dashbord from './components/Dashbord'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Dashbord />
  
    </>
  )
}

export default App
