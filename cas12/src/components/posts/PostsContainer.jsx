import React,{useEffect} from 'react';
import {PostsComponent} from './PostsComponent';
import {useDispatch,useSelector} from 'react-redux';
import {fetchPosts} from './duck/operations';
import {getToken} from './../../config/StorageFunctions'

export default function PostsContainer(){

    const dispatch = useDispatch();
    const posts = useSelector(state=>state.postsReducer.posts);
    const error = useSelector(state=>state.postsReducer.error);


    useEffect(()=>{
        dispatch(fetchPosts(getToken()))
    },[dispatch])

    return(
        <div id='posts-container'>
            <PostsComponent posts={posts} error={error}/>
        </div>
    )
}