import React from 'react'
import { useState } from'react'

const Hooks = () => {
    const [value, setInputValue] = useState('')
    let onChange = (e) => {
        let  nzz = (e.target.value)
        setInputValue (nzz)
    } 
  return (
    <div>
        <input placeholder='enter text' onChange={onChange}/>
        {value}
    </div>
  )
}

export default Hooks