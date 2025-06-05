import React from "react";

export const PostsComponent = ({ posts, error }) => {
  return (
    <div id="posts-component">
      {error && <h1>{error}</h1>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <p>ID: {post.id}</p>
            <p>Author: {post.author}</p>
            <p>Post: {post.post}</p>
            <hr/>
          </div>
        ))}
    </div>
  );
};
