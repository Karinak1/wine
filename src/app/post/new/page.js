import { db } from '@/util/db';

export default async function NewPost() {
  async function handleComment(formData) {
    'use server';
    const username = formData.get('username');
    const type = formData.get('type');
    const review = formData.get('review');

    const result = await db.query(
      `INSERT INTO post(username,type, review)VALUES ($1, $2, $3)`,
      [username, type, review]
    );
  }
  return (
    <div>
      <form action={handleComment}>
        <label>USERNAME</label>
        <input name="username" placeholder="username" />
        <label>TYPE</label>
        <input name="type" placeholder="type " />
        <label>REVIEW</label>
        <input name="review" placeholder="review " />
        <button>ADD COMMENT</button>
      </form>
    </div>
  );
}
