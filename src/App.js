import React, { useState } from 'react'

export const App = () => {
  return (
    <div>
        <input type="text" placeholder="hello" onChange={ (e)=>e.target.value} />
    </div>
  )
}
