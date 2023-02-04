import { addBlog } from "../../action/blogAction";


const addBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://personal-blog-server.onrender.com/api/v1/blog", {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json();


        dispatch(addBlog({
            _id: data.insertedId,
            ...blog,
        }))



    }
}

export default addBlogData;