import PostList from '../components/PostList';

export default function Home({ posts }) {
  return (
    <>
      <PostList posts={posts} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const BLOG_URL = process.env.BLOG_URL;
  const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=authors,tags`);
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}