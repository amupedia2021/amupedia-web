const router = require("express").Router();
const User = require("../model/user.model");
const Blog = require("../model/blog.model");


const isLoggedIn = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json("Unauthorized");
  }
};



//CREATE BLOG
router.post("/",isLoggedIn, async (req, res) => {

 
    const {title , desc} = req.body;
    const user = await User.findById(req.session.userId);
    if(!title || !desc){
      res.status(401).json("Must have Title and Description");
    }
    const newBlog = new Blog({
        title: title,
        desc: desc,
        username: user.username
    });
    try {
      const savedBlog = await newBlog.save();
      res.status(200).json(savedBlog);
    } catch (err) {
      res.status(500).json(err);
    }
 
});

//UPDATE BLOG
router.put("/:id",isLoggedIn, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    const user = await User.findById(req.session.userId);
    if (blog.username === user.username) {
      try {
        const updatedBlog = await Blog.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedBlog);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your Blog!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE BLOG
router.delete("/:id", isLoggedIn, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    const user = await User.findById(req.session.userId);
    if (blog.username === user.username) {
      try {
        await blog.delete();
        res.status(200).json("Blog has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your blog!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BLOG
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL BLOG
router.get("/", async (req, res) => {
  try {
    let blogs;
      blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;