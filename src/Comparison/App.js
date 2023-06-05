import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Compare from './Compare'
import Home from './Home'
import Singleproduct from './Singleproduct'
import Header from './Header'
export const productcontext =createContext (null)
function App() {
  const [singleproduct, setsingleproduct] = useState([])
  const [compare, setcompare] = useState([])
  return (
    <div>
      <productcontext.Provider value={{singleproduct , setsingleproduct , compare , setcompare}}>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Compare' element={<Compare />}></Route>
            <Route path='/Singleproduct' element={<Singleproduct />}></Route>
            <Route path='/Compare' element={<Compare />}></Route>
           
        </Routes>
        </BrowserRouter>
        </productcontext.Provider>
    </div>
  )
}

export default App