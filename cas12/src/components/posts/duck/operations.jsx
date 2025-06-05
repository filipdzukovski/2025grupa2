import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFail,
} from "./actions";
import { getPosts } from "./../../../api/postsApi";

export const fetchPosts = (requestParams) => {
    console.log("REQUESTPARAMS",requestParams)
  return (dispatch) => {
    dispatch(fetchPostsRequest(requestParams));
    return getPosts(requestParams)
      .then((res) => {
        console.log(res)
        dispatch(fetchPostsSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(fetchPostsFail(err.message));
        return err.message;
      });
  };
};
