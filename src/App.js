import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs/Blogs';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import CreateBlogs from './components/CreateBlogs/CreateBlogs';
import Header from './components/Navbar/Header';
export const MyContex = React.createContext();
function App() {
  const navigate = useNavigate()
  const [id, setId] = useState(2)
   const [blogData, setBlogData] = useState([{id:1, title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  desc:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}]);
  const handleChange = (title, desc) =>{
    setId(id + 1)
    let newBlog = [...blogData, {id: id,title: title, desc: desc}]
    setBlogData(newBlog)
    navigate('/blogs')
  }
  return (
    <div className="App">
      <Header />
      <MyContex.Provider value={blogData}>
      <Routes >
      <Route path='/' exact element={<Blogs />} /> 
      <Route path='/createblog'  element={<CreateBlogs handleChange={handleChange}/>} />
        <Route path='/blogs/:id' element={<Blog blogData={blogData}/>} />       
      </Routes>
      </MyContex.Provider>
      
    </div>
  );
}

export default App;
