import React from 'react'
import { useParams } from 'react-router-dom'
import "./Blog.css"
function Blog({blogData}) {
    const {id} = useParams();
     const data = blogData.filter((item)=>(
     item.id === parseInt(id)  
    ))
  return (
    <div className='container blog bg-dark text-white'>
      {
        data.map((item)=>(
          <div>
             <h1 className='head' key={item.id}>{item.title}</h1>
             <hr />
             <p>{item.desc}</p>
          </div>
         
        ))
      }
    </div>
  )
}

export default React.memo(Blog)