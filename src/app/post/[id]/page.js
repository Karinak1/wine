import pg from 'pg';

export default async function SinglePost({ params }) {
  const id = (await params).id;
  const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const result = await db.query(`SELECT * FROM post WHERE id =${id}`);
  const post = result.rows[0];

  return (
    <div>
      <h3>{post.username}</h3>
      <h3>{post.type}</h3>
      <h4>{post.review}</h4>
    </div>
  );
}
