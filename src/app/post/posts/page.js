import Link from 'next/link';

export default async function WineListPage({ searchParams }) {
  // console.log('searchParams', searchParams);
  const response = await fetch('http://localhost:3000/post/1');
  const posts = await response.json();

  if (searchParams.sort === 'desc') {
    posts.reverse();
  }

  return (
    <div>
      <h2>Wine Post</h2>
      <Link href="/post?sort=asc">Sort ascending</Link>
      <Link href="/post?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.username}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
