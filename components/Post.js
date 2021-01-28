import React from 'react'
import postStyles from '../styles/Post.module.css'
import moment from 'moment'

const Post = ({ post }) => {
  const createdAt = moment(post.created_at).format('DD/MM/YYYY');
  const time = moment(post.created_at).format('LT');
  return (
    <div className={postStyles.postContainer}>
      <h1 className={postStyles.postTitle}>{post.title}</h1> <span className={postStyles.postInfo}>{post.primary_author.name} - {createdAt} {time}</span>
      <div className={postStyles.postBody} dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export default Post
