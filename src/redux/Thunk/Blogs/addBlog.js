import { addBlog } from "../../action/blogAction";


const addBlogData=(blog)=>{
    return async (dispatch,getState)=>{
        const res= await fetch("http://localhost:5000/api/v1/blog",{
            method:"POST",
            body:JSON.stringify(blog),
            headers:{
                "Content-type":"application/json"
            }
        });
        const data =await res.json();

       
            dispatch(addBlog({
                _id:data.insertedId,
                ...blog,
            }))
        


    }
}

export default addBlogData;