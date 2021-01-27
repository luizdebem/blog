import PostList from '../components/PostList';

export default function Home({ posts }) {
  return (
    <>
      <PostList posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}