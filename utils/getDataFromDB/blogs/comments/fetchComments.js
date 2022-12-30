import db from 'db/db';
import BlogComment from 'db/models/BlogComment';

export default async function fetchBlogComment() {
  await db.connect();
  const data = await BlogComment.find();
  await db.disconnect();

  return JSON.parse(JSON.stringify(data));
}
