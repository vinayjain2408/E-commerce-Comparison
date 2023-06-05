import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productcontext } from './App'


function Header() {
  const {compare} = useContext(productcontext)
  return (
    <header>
        <div className='left'>
        <h1>E-Commerce</h1>
        </div>
      
        <div className='right'>
          <h2><Link to="/">Catalog</Link></h2>
          <h2><Link to="/Compare">Compare ({compare.length})</Link></h2>


        </div>
    </header>
  )
}

export default Header