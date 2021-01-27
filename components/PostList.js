import React from 'react'
import Post from './Post';
import postListStyle from '../styles/PostList.module.css';

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className={postListStyle.postListContainer}>
      {posts.map(post => {
        return (
          <Post post={post} />
        );
      })}
    </div>
  )
}

export default PostList
