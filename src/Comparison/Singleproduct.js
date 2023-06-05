import React, { useContext } from 'react'
import { productcontext } from './App'

function Singleproduct() {
  const { singleproduct } = useContext(productcontext)
  return (
    <div className='singleproduct'>
      <div className='singleimage'>
        <img src={singleproduct.image}></img>
      </div>
      <div className='details'>
        <h1>Brand:{singleproduct.brand}</h1>
       <ul>
        <li><h3>Model:{singleproduct.model}</h3></li>
        <li><h3>Rear camera:{singleproduct.rear_camera}</h3></li>
        <li><h3>Front camera:{singleproduct.front_camera}</h3></li>
        <li><h3>Screen:{singleproduct.screen}</h3></li>
        <li><h3>Cost:<span>{singleproduct.cost}$</span></h3></li>
        <li><h3>Storage:{singleproduct.storage}</h3></li>
        <li><h3>Os:{singleproduct.os}</h3></li>
       </ul>
      </div>
    </div>
  )
}

export default Singleproduct