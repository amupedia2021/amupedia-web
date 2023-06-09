import db from "db/db";
import nextConnect from "next-connect";
import Form from "db/models/Form";
import FormSchema from "validation/form"

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const payload = await FormSchema.validateAsync(req.body)
    const {first_name, last_name, email, phone, address, message} = payload;
    const result = await Form.create({
      first_name,
      last_name,
      email,
      phone,
      address,
      message
    });

    await db.disconnect();
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
