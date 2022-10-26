import db from 'db/db';
import Opportunities from 'db/models/Opportunities';
import nextConnect from 'next-connect';
const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const data = req.body;
    console.log(data);
    const result = await Opportunities.create({
      title: req.body.title,
      applyNow: req.body.applyNow,
      date: req.body.date,
      description: req.body.description,
    });
    await db.disconnect();
    res.status(200).json({ success: true, result: result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
