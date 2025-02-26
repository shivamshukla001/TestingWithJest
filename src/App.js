import React, { useState } from 'react'

export const App = () => {
  const[data,setData] = useState("")
  return (
    <div>
        <h1>Test Click Event Case</h1>
        <button  onClick={()=>setData("hello World")} >Click Me</button>
        <h1>{data}</h1>
    </div>
  )
}
