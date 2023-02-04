import { removeBlog } from "../../action/blogAction";

const deleteBlogData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://personal-blog-server.onrender.com/api/v1/blog/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(removeBlog(id))
        }
    }
}

export default deleteBlogData;