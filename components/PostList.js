import React from 'react'
import Post from './Post';
import postListStyle from '../styles/PostList.module.css';

const PostList = ({ posts }) => {
  return (
    <div className="container post-list-container">
      <div className="row">
        <div className="col">
          {posts.posts.map((post, index) => {
            console.log(post.id)
            return (
              <div key={post.id}>
                <Post post={post} />
                {index < (posts.posts.length - 1) && <div style={{ textAlign: 'center' }}><b> &lt;/&gt; </b></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default PostList
