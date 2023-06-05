import React, { useContext } from 'react'
import { productcontext } from './App'

function Compare() {
  const { compare } = useContext(productcontext)
  console.log(compare)
  return (
    <div className='comparison'>
      {
        compare.map((product, index) => {
          return (
            <div key={index} className="item">
              <img src={product.product.image}></img>
              <li><h4>Model:{product.product.model}</h4></li>
              <li><h4>Rear camera:{product.product.rear_camera}</h4></li>
              <li><h4>Front camera:{product.product.front_camera}</h4></li>
              <li><h4>Screen:{product.product.screen}</h4></li>
              <li><h4>Cost:<span>{product.product.cost}$</span></h4></li>
              <li><h4>Storage:{product.product.storage}</h4></li>
              <li><h4>Os:{product.product.os}</h4></li>
            </div>
          )
        })
      }
    </div>
  )
}

export default Compare