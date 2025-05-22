import React from 'react';

export const Posts = ({listOfPosts}) =>{

    return(
        <div id='posts'>
            <table border = {1}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfPosts.map(post=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}