import db from 'db/db'
import Blog from 'db/models/Blog';

export default async function fetchBlogId(blogId) {
  await db.connect();
  const data = await Blog.find({ id: blogId });
  await db.disconnect();

  return JSON.parse(JSON.stringify(data))
}