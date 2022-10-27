import db from 'db/db';
import OpportunityDetail from 'db/models/Opportunities/OpportunityDetail';
import nextConnect from 'next-connect';
const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const data = req.body;
    console.log(data);
    const result = await OpportunityDetail.create({
      id: data.id,
      title: data.title,
      applyNow: data.applyNow,
      date: data.date,
      description: data.description,
    });
    await db.disconnect();
    res.status(200).json({ success: true, result: result });
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, error });
  }
});

export default handler;
