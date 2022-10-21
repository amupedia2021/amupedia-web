import db from "db/db";
import nextConnect from "next-connect";
import Form from "db/models/Form";

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const data = req.body;

    const result = await Form.create({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      message: data.message,
    });

    await db.disconnect();
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
