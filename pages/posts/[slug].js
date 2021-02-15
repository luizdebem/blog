import React from 'react'
import Post from '../../components/Post';

const PostPage = ({ post }) => {
  return (
    <div className="container post-list-container">
      <div className="row">
        <div className="col">
          <Post post={post} showBody={true}></Post>
        </div>
      </div>
    </div>
  );
}

export default PostPage

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const BLOG_URL = process.env.BLOG_URL;
  const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const BLOG_URL = process.env.BLOG_URL;
  const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
  const slug = params.slug;
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&include=authors,tags`);
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post: post.posts[0] }, revalidate: 600 }
}