import React, { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { useDispatch, useSelector } from "react-redux";
import deleteBlogData from '../../redux/Thunk/Blogs/deleteBlog';


import loadProductData from '../../redux/Thunk/Blogs/fetchProduct';
const BlogList = () => {
    const dispatch = useDispatch();
    // const [blogs, setBlogs] = useState([])
    const blogs = useSelector((state) => state.Blogs)
    useEffect(() => {
        /*    fetch('https://personal-blog-server.onrender.com/api/v1/blog')
               .then(res => res.json())
               .then(data => setBlogs(data.data)) */
        dispatch(loadProductData())
    }, [])
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>

                        <th>Blog Title</th>
                        <th>Blog Category</th>
                        <th>Blog  Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs?.map(({ blogTitle, blogCategory, blogDate, _id }) =>
                            <tr>

                                <td>{blogTitle}</td>
                                <td>{blogCategory}</td>
                                <td>{blogDate}</td>
                                <td>
                                    <div>
                                        <button
                                            className='text-xl text-red-600'  ><AiTwotoneDelete /></button>   
                                    </div>
                                </td>

                            </tr>


                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default BlogList;