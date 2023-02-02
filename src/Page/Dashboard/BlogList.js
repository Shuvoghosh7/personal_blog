import React, { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';

const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/blog')
            .then(res => res.json())
            .then(data => setBlogs(data.data))
    }, [])
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Blog Title</th>
                        <th>Blog Category</th>
                        <th>Blog  Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs?.map((blog, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{blog.blogTitle}</td>
                                <td>{blog.blogCategory}</td>
                                <td>{blog.blogDate}</td>
                                <td>
                                    <div>
                                        <button className='text-xl text-red-600' ><AiTwotoneDelete /></button>
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