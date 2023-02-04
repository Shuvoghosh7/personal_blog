import React, { useEffect, useState } from 'react';
import BlogCart from '../../Component/BlogCart';
import { useDispatch, useSelector } from "react-redux";
import loadProductData from '../../redux/Thunk/Blogs/fetchProduct';

const Home = () => {
   
    const dispatch = useDispatch();
    const blogs=useSelector((state)=>state.Blogs)
    useEffect(()=>{
        dispatch(loadProductData())   
    },[])
    let content;
    if(blogs.length){
        content=blogs.map(blog => <BlogCart key={blog._id} blog={blog} />)

    }
    return (
        <div>
            {
               content 
            }
        </div>
    );
};

export default Home;