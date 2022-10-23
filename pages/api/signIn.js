import db from "db/db";
import User from "db/models/User";
import nextConnect from "next-connect";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const data = req.body;
    const user = await User.findOne({ email: data.email });
    await db.disconnect();

    if (!user) {
      return res.status(200).json({ success: false, newUser: true });
    }

    const pass = data.password;
    const passMatch = await bcrypt.compare(pass, user.password);

    if (!passMatch) {
      return res
        .status(400)
        .json({ success: false, newUser: false, message: "Wrong Password" });
    }

    const payload = {
      userEmail: user.email,
    };

    const token = jwt.sign(payload, secret);
    res.status(200).json({ success: true, newUser: false, token });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
