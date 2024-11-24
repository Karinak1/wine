import Link from 'next/link';

export default async function WineListPage({ searchParams }) {
  console.log('searchParams', searchParams);
  const response = await fetch('http://localhost:3000/post');
  const posts = await response.json();

  if (searchParams.sort === 'desc') {
    posts.reverse();
  }

  return (
    <div>
      <h2>Wine Post</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link>
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            <a href={`/posts/${post.id}`}>{post.username}</a>
            <a href={`/posts/${post.id}`}>{post.type}</a>
            <a href={`/posts/${post.id}`}>{post.review}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
