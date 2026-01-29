import { useState } from 'react'
import { Route,Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/edit' element={<Edit/>}/>
   


    




    </Routes>

   
    </>
  )
}

export default App
