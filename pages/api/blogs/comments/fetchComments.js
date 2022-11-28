import db from "db/db";
import BlogComment from "db/models/BlogComment";
import nextConnect from "next-connect";
const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const data = req.body;
    console.log(data);
    const result = await BlogComment.find();
    console.log(result)
    await db.disconnect();
    res.status(200).json({ success: true, result: result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
