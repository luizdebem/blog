import React from 'react'
import postStyles from '../styles/Post.module.css'
import moment from 'moment'
import Link from 'next/link'

const Post = ({ post, showBody }) => {
  const createdAt = moment(post.created_at).format('DD/MM/YYYY');
  const time = moment(post.created_at).format('LT');
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className={postStyles.postContainer}>
        <h1 className={postStyles.postTitle}><a href="">{post.title}</a></h1> <p className={postStyles.postInfo}>{post.primary_author.name} - {createdAt} {time}</p>
        {showBody && <div className={postStyles.postBody} dangerouslySetInnerHTML={{ __html: post.html }}></div>}
      </div>
    </Link>
  )
}

export default Post
