import db from 'db/db';
import Opportunities from 'db/models/Opportunities';
import nextConnect from 'next-connect';
import opportunitiesSchema from 'validation/opportunities';
const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const payload = await opportunitiesSchema.validateAsync(req.body);
    const {id, image, title, date, applyNow, description} = payload
    const result = await Opportunities.create({
      id,
      image,
      title,
      date,
      applyNow,
      description
    });
    await db.disconnect();
    res.status(200).json({ success: true, result: result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
