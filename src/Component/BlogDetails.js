import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogDetails, seBlogDetails] = useState([])
    console.log(blogDetails)
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/blog/${id}`)
        .then(res => res.json())
        .then(data => seBlogDetails(data.data))
    }, [])
    return (
        <div className='mt-12 lg:mx-40 mx-12'>
            <figure>
                <img src={blogDetails.imageUrl} alt="" className='w-full lg:h-[450px] rounded-lg' />
            </figure>
            <div className='mt-8'>
                <div className='lg:flex md:flex justify-between items-center'>
                    <p className='text-3xl font-bold mb-5'>{blogDetails.blogTitle}</p>
                    <p className='font-medium'>{blogDetails.blogDate}</p>
                </div>
                <p className='text-justify'>{blogDetails.blogDescription}</p>
            </div>

        </div>
    );
};

export default BlogDetails;