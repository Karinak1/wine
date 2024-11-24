import pg from 'pg';
import Link from 'next/link';

//SHOW LIST OF ALL POSTS FROM DB
export default async function PostOne() {
  const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

  const result = await db.query(`SELECT*FROM post`);
  const posts = result.rows;
  console.log(posts);
  return (
    <div className="border">
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/post/${post.id}`}>
            <h3>{post.username}</h3>
            <h3>{post.type}</h3>
            <h3>{post.review}</h3>
            <button>delete</button>
          </Link>
        );
      })}
    </div>
  );
}
