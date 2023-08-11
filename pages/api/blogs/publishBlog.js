import db from "db/db";
import Blog from "db/models/Blog";
import nextConnect from "next-connect";
import blogSchema from "validation/blog";
const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const payload  = await blogSchema.validateAsync(req.body);
    const {userId, title, coverImg, content} = payload
    const result = await Blog.create({
      userId,
      title,
      coverImg,
      content
    });
    await db.disconnect();
    res.status(200).json({ success: true, result: result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
