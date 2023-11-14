import React, { useContext, useEffect, useState } from 'react'
import { MyContex } from '../../App'
import { Link } from 'react-router-dom'
import "./Blogs.css"
function Blogs() {
    const data = useContext(MyContex)
    const [fetch, setFetch] = useState([])
    useEffect(()=>{setFetch(data)}, [data])
   
  return (
    <div className='container bg-dark blogs'>
      <h1>Blogs</h1>
      <hr />
        {fetch.map((datas,index)=>(
            <div  key={index}>
                <Link className='link1' to={`/blogs/${datas.id}`}><h3 style={{fontSize:"30px"}}>{datas.title}</h3></Link>
            <p style={{fontSize:"20px"}}>{datas.desc}</p>
            <hr />
            </div>
            
        ))}
    </div>
  )
}

export default Blogs
