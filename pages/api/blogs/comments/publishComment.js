import db from 'db/db';
import BlogComment from 'db/models/BlogComment';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const data = req.body;
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    console.log(data);
    const result = await BlogComment.create({
      userName: req.body.userName,
      blogId: req.body.blogId,
      message: req.body.message,
      date: `${mm}/${dd}/${yyyy}`,
    });
    await db.disconnect();
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
