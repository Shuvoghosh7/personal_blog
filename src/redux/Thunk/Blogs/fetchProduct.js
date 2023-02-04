import { loadBlogData } from "../../action/blogAction";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://personal-blog-server.onrender.com/api/v1/blog");
        const data = await res.json();


        if (data.data.length) {
            dispatch(loadBlogData(data.data))
        }
    }
}
export default loadProductData;