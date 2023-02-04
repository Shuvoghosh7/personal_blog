import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import addBlogData from '../../redux/Thunk/Blogs/addBlog';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const dispatch=useDispatch();
    const submit = (data) => {
        const blog = {
            imageUrl: data.imageUrl,
            blogTitle: data.blogTitle,
            blogCategory:data.blogCategory,
            blogDescription:data.blogCategory,
            blogDate:data.blogDate,
        };
    
        console.log(blog);
        dispatch(addBlogData(blog))
      };
    return (
        <div>
           <form className=" mx-auto p-5" onSubmit={handleSubmit(submit)}>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Blog ImageUrl</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Project Name"
                                className="input input-bordered bg-white w-full"
                                {...register("imageUrl", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Blog Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="blog Title"
                                className="input input-bordered bg-white w-full"
                                {...register("blogTitle", {
                                    required: {
                                        value: true,
                                        message: "blogTitle is required"
                                    }
                                })}
                            />
                        </div>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Blog Category</span>
                            </label>
                            <input
                                type="text"
                                placeholder="blog Title"
                                className="input input-bordered bg-white w-full"
                                {...register("blogCategory", {
                                    required: {
                                        value: true,
                                        message: "blogTitle is required"
                                    }
                                })}
                            />
                        </div>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Blog Description</span>
                            </label>
                            <textarea
                                placeholder="Project Description"
                                className="input input-bordered bg-white w-full"
                                {...register("blogDescription")}
                            />
                        </div>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Blog Category</span>
                            </label>
                            <input
                                type="date"
                                placeholder="blog Title"
                                className="input input-bordered bg-white w-full"
                                {...register("blogCategory", {
                                    required: {
                                        value: true,
                                        message: "blogTitle is required"
                                    }
                                })}
                            />
                        </div>
                        <div className="modal-action w-full mx-auto m-5">
                            <input className='btn btn-accent text-white w-full' type="submit" value="Add Blog" />
                        </div>
                    </form>
        </div>
    );
};

export default AddBlog;