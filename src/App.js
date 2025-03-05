import React, { useState } from 'react'
import handleReturnStatement from './helper'

const App = () => {
  const [data,setData] = useState("")
  const Handler = ()=>{
    setData("hiii")
  }
  return (
    <div>
     <h1>Functional Testing COmponent</h1>
     <button data-testId= "btn" onClick={Handler}>Update </button>
     <button  onClick={handleReturnStatement}>Update </button>
      <h1>{data}</h1>
    </div>
  )
}

export default App
