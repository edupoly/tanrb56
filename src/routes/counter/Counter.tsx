import React, { useState } from 'react'

function Counter() {
    let [count,setCount] = useState(0)
  return (
    <div className=' m-3 border p-3'>
        <h1 className='text-3xl'>Counter:{count}</h1>
        <button className='p-2 m-2 border rounded bg-green-300' onClick={()=>{setCount(count+1)}}>Increment</button>
        <button className='p-2 m-2 border rounded bg-red-300' onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter