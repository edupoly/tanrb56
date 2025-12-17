import { useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import { productsQueryOptions } from './index'

function Products() {
    var {data:products} = useSuspenseQuery(productsQueryOptions)

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {
          products.map((product)=>{
            return <li>{product.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Products