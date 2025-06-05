import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "./constants";

export const fetchPostsRequest = (requestParams) => {
  return {
    type: GET_POSTS_REQUEST,
    payload: requestParams,
  };
};

export const fetchPostsSuccess = (posts) => {
    console.log(posts)
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFail = (err) => {
  return {
    type: GET_POSTS_FAIL,
    payload: err,
  };
};
