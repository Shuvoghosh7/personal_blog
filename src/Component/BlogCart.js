import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './BlogCart.css'

const BlogCart = ({ blog }) => {
    const dispatch=useDispatch()
    const { imageUrl, blogTitle, blogCategory, blogDescription, blogDate, _id } = blog
    return (
        <div className='mt-12 lg:mx-40 mx-12'>
            <figure>
                <img src={imageUrl} alt="" className='w-full lg:h-[450px] rounded-lg' />
            </figure>
            <div className='mx-20 mt-8'>
                <div className='lg:flex md:flex justify-between items-center'>
                    <p className='text-2xl font-bold mb-3'>{blogTitle}</p>
                    <p className='font-medium'>{blogDate}</p>
                </div>
                <p className='text-justify'>{blogDescription.slice(0, 300)}...</p>

                <div>
                    <Link to={`/blog/${_id}`} className='continu-btn'>Continue Reading</Link>
                </div>
            </div>
          

        </div>
    );
};

export default BlogCart;