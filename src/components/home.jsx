import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./blog.css";
import {Link} from "react-router-dom";
const Home = () => {
 const [blog , setBlog] = useState([]);


 useEffect(()=>{
    axios.get(`https://kalvakollu.herokuapp.com/`).then(response=>{console.log(response);setBlog(response.data)});
 },[])
 console.log(blog);
  return (
    <div className="bloglist-wrap">
  
        {blog.map(item=>{
            return(
            <div class ="blogItem-wrap">
            <Link to={`/category/${item.id}/${item.category}`}><img src={item.cover} alt="cover" className='blogItem-cover' />
            <h3>{item.title}</h3>
            <p className='blogItem-desc'>{item.description}</p>
            <p className='blogItem-publish'>{item.published}</p></Link>
            </div>
            )
        })}
    </div>
  )
}

export default Home;