import React from 'react'
import postStyles from '../styles/Post.module.css'
import moment from 'moment'

const Post = ({ post }) => {
  return (
    <div className={postStyles.postContainer}>
      {/* todo: arrumar nome do autor e data da postagem (depois de integrar com ghost) */}
      <h1 className={postStyles.postTitle}>{post.title}</h1> <span className={postStyles.postInfo}>por AUTOR em {moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
      <p className={postStyles.postBody}>{post.body}</p>
    </div>
  )
}

export default Post
