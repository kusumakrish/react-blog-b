import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import "./index.css";
const Blog = () => {
    const {id} = useParams();
    const [Blog , setBlog] = useState({});
    const [apiblog , setApiblog] = useState([]);
    useEffect(()=>{
      axios.get(`https://kalvakollu.herokuapp.com/`).then(response=>{console.log(response);setApiblog(response.data)});
      },[]);
    
      useEffect(()=>{
        let blog = apiblog.find(blog=>blog.id === parseInt(id));
      if(blog){
        setBlog(blog);
      }
      })
      console.log(apiblog);
      console.log(Blog);
  return (
    <div>
      {Blog ? <div className="blog-wrap">
      <header className='blog-heading'>
         <h1>{Blog.title}</h1>
      </header>
      <img src={Blog.cover} alt="cover" className='blog-img'/>
      <p className='blog-description'>{Blog.description}</p>
      </div>: null}
    </div>
  )
}

export default Blog