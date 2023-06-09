import db from 'db/db';
import Opportunities from 'db/models/Opportunities';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await db.connect();
    const result = await Opportunities.create({
      id: data.id,
      image: data.image,
      title: data.title,
      date: data.date,
      applyNow: data.applyNow,
      description: data.description
    });
    await db.disconnect();
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
