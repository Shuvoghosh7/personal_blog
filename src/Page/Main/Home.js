import React, { useEffect, useState } from 'react';
import BlogCart from '../../Component/BlogCart';

const Home = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/blog')
        .then(res =>res.json())
        .then(data => setBlogs(data.data))
    },[])
    return (
        <div>
            {
                blogs.map(blog => <BlogCart key={blog._id} blog={blog} />)
            }
        </div>
    );
};

export default Home;