import React from 'react'
import Post from './Post';
import postListStyle from '../styles/PostList.module.css';

const PostList = ({ posts }) => {
  return (
    <div className={postListStyle.postListContainer}>
      {posts.posts.map(post => {
        return (
          <Post post={post} />
        );
      })}
    </div>
  )
}

export default PostList
