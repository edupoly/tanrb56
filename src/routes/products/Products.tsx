import { useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import { productsQueryOptions } from './index'
import { Link, Outlet } from "@tanstack/react-router"

function Products() {
    var {data:products} = useSuspenseQuery(productsQueryOptions)

  return (
    <div>
      <h1>Products</h1>
      <Outlet></Outlet>
      <ul>
        {
          products.map((product)=>{
            return <li><Link to={`${product.id}`}>{product.title}</Link></li>
          })
        }
      </ul>
      
    </div>
  )
}

export default Products