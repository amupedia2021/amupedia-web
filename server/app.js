const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./route/auth.route");
const userRoute = require("./route/user.route");
const blogRoute = require("./route/blog.route");
const session = require("express-session");

app.use(
    session({
      secret: "your-secret-key",
      resave: true,
      saveUninitialized: true,
    })
);
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);


const start = async function(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
    app.listen("8000", () => {
        console.log("Backend is running.");
    });

}
start();