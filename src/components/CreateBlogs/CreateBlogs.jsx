import React, { useState } from 'react'
import './CreateBlog.css'
import Button from 'react-bootstrap/Button';
function CreateBlogs({handleChange}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
  return (
    <div className='container bg-dark text-white create'>
      <h1 style={{fontFamily:"Monospace"}}><span className='text-warning'>C</span>reate <span className='text-warning'>B</span>log</h1>
      Title:
        <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='title...'/>
        <br />
        Body:
        <textarea onChange={(e)=>setDesc(e.target.value)} placeholder='enter your blog....' />
        <br />
        <Button variant="success" className='btn-create' onClick={()=>handleChange(title, desc)}>post</Button>
    </div>
  )
}

export default React.memo(CreateBlogs)