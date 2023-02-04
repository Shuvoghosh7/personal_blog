import { loadBlogData } from "../../action/blogAction";

const loadProductData=()=>{
    return async (dispatch,getState)=>{
        const res= await fetch("http://localhost:5000/api/v1/blog");
        const data =await res.json();
       

        if(data.data.length){
            dispatch(loadBlogData(data.data))
        }
    }
}
export default loadProductData;