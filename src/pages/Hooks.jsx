import React from 'react'
import { useEffect, useState } from'react'
import  axios from 'axios'

const UuseEffect = () => {
  const [data, setData] = useState('')
  const [count , setCount] = useState(0)

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
       setData(response.data[0].email)
       console.log('x')

      });
     } , [count])

    

  return (
    <div>jjj
       <h1>{data}</h1>
    <h2>{count}</h2>
    <button onClick={()=>{
      setCount(count + 1)
    }}>count</button>
    </div>
  )
}

export default UuseEffect