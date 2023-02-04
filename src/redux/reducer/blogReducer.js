import { ADD_BLOG, LOAD_BLOG, REMOVE_BLOG } from "../actionType/actionType";

const initialState = {
    Blogs: [],

};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOG:
            return {
                ...state,
                Blogs: action.payload,
            }
      
        case ADD_BLOG:
            return {
                ...state,
                Blogs: [...state.Blogs, action.payload],
            }
        case REMOVE_BLOG:
            return {
                ...state,
                Blogs: state.Blogs.filter(
                    (blog) => blog._id !== action.payload
                ),
            };

        default:
            return state;
    }
}

export default blogReducer;