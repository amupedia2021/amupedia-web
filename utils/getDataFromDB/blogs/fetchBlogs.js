import db from 'db/db';
import Blog from 'db/models/Blog';

export default async function fetchBlogs() {
  await db.connect();
  const data = await Blog.find();
  await db.disconnect();

  return JSON.parse(JSON.stringify(data));
}
