import db from "db/db";
import User from "db/models/User";
import nextConnect from "next-connect";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userSchema from "validation/user";

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const payload = await userSchema.validateAsync(req.body);
    const {email, password} = payload;

    const user = await User.findOne({ email });
    await db.disconnect();

    if (!user) {
      return res.status(200).json({ success: false, newUser: true });
    }
    const passMatch = await bcrypt.compare(password, user.password);

    if (!passMatch) {
      return res
        .status(400)
        .json({ success: false, newUser: false, message: "Wrong Password" });
    }

    const jwtPayload = {
      userEmail: user.email,
    };

    const token = jwt.sign(jwtPayload, secret);
    res.status(200).json({ success: true, newUser: false, token });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default handler;
