import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/courses/_${id}`)
        .then((res)=>setData(res.data))
        }, [])
        console.log(data);
  return (
    <div>
  detais
    </div>
  )
}

export default Details
