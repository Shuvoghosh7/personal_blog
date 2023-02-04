import { ADD_BLOG, LOAD_BLOG, LOAD_SINGLE_BLOG } from "../actionType/actionType"

export const loadBlogData=(data)=>{
    return{
      type:LOAD_BLOG,
      payload:data,
    }
  
  }
  export const addBlog = (blog) => {
    return {
      type: ADD_BLOG,
      payload: blog,
    };
  };