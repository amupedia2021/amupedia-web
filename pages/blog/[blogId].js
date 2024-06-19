import { useRouter } from "next/router";
import { useState ,useEffect} from "react";
import styles from "@styles/BlogDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faClock } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faPlayCircle } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faTwitter } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faLinkedin } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faLink } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faBookmark } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faEllipsisH } from "node_modules/@fortawesome/free-solid-svg-icons/index";
<<<<<<< HEAD
import {faArrowLeft} from "node_modules/@fortawesome/free-solid-svg-icons/index";
import BlogCard from "components/Blogs/BlogCard";
import blogData from "/data/blogdata";
import Link from "next/link";
import Footer from "components/common/Footer";
import ReactMarkdown from "react-markdown";
import md from "markdown-it";
export default function BlogId() {
  const router = useRouter();
  const { blogId } = router.query;
  const[Blogid,SetBlogid]=useState(blogId);

  const blog = blogData.find(item => item.id === parseInt(Blogid))
  console.log(blog)
  console.log("heelo",blogId);
  
=======
import BlogCard from "components/BlogCard";
import axios from 'axios';
// import blogData from "/data/blogdata";
import Link from "next/link";

export default function BlogId({ blogsData, commentsData }) {
  const router = useRouter();
  const { blogId } = router.query;
  const blogDetail = blogsData.result[blogId];
  console.log(blogDetail)
  const { userId, title, coverImg, content, _id } = blogDetail;
  console.log(coverImg)

  const submitComment = (e) => {
    e.preventDefault();
    const message = document.getElementById("userCommentMessage").value;
    const userCommentName = document.querySelector(".userCommentName").value;
    const blogId = _id;
    if (message.length < 3) {
      return alert("Message must longer than  3 characters")
    }
    if (userCommentName < 3) {
      return alert("Your Name must longer than  3 characters")
    }
    if (blogId.length <= 1) {
      return alert("Blog Id must be longer than 1 characters")
    }
    axios.post("http://localhost:3000/api/blogs/comments/publishComment", { userName: userCommentName, blogId, message }).then(res => {
      console.log(res)
      alert("Comment has been sent!")
    })
  }
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150
  return (
    <div className="w-screen">
    <div className={styles.blog}>
      <div className={styles.blogDetail}>
        <div className={styles.blogHeader}>
<<<<<<< HEAD
          <h2 className=" mb-5 leading-tight py-4 fixed top-0 z-30 w-screen bg-white shadow-xl font-semibold font-mono">{blog.title}</h2>
=======
          <h2>{title}</h2>
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150
          <div className={styles.blogHeaderInfo}>
            <div className={styles.blogHeaderInfoLeft}>
              <ul>
                <li>
                  <a href="/blog" class="text-blue-700 hover:scale-110 hover:text-blue-900 transition duration-200">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span> Blogs</span>
                  </a>
                </li>
                <li className="-space-x-1">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <span>{userId}</span>
                </li>
                <li className="-space-x-1">
                  <FontAwesomeIcon icon={faClock} />
                  <span>5 min read</span>
                </li>
                <li className="hover:scale-110 -space-x-1">
                  <FontAwesomeIcon icon={faPlayCircle} />
                  <span>Listen</span>
                </li>
              </ul>
            </div>
            <div className={styles.blogHeaderInfoRight}>
              <ul className={styles.socialIcons}>
                <li>
                  <Link href="#twitter">
                    <a href="#twitter">
                      <FontAwesomeIcon className="hover:text-blue-500 hover:scale-150 transition duration-200" icon={faTwitter}/>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#facebook">
                    <a href="#facebook">
                      <FontAwesomeIcon className="hover:text-blue-500 hover:scale-150 transition duration-200" icon={faFacebook} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#linkedin">
                    <a href="#linkedin">
                      <FontAwesomeIcon className="hover:text-blue-500 hover:scale-150 transition duration-200" icon={faLinkedin} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#blogLink">
                    <a href="#blogLink">
                      <FontAwesomeIcon className="hover:text-green-500 hover:scale-150 transition duration-200" icon={faLink} />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className={styles.bookmark_and_more_icon}>
                <FontAwesomeIcon className="hover:text-[#000] cursor-pointer hover:scale-150 transition duration-200" icon={faBookmark} />
                <FontAwesomeIcon className="hover:text-[#000] cursor-pointer hover:scale-150 transition duration-200" icon={faEllipsisH} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogPicture}>
<<<<<<< HEAD
          <img loading="lazy"
            src={blog.image}
            width="100%"
            height="100%"
            className="inline object-fill w-full"
          />
        </div>
        <div className={styles.blogBody}>
            {blog.description} 
=======
          <Image src={`/images/blog/${coverImg}`}
            alt="blogDetailPicture"
            layout="responsive"
            width="700"
            height="700"
          />
        </div>
        <div className={styles.blogBody}>
          <p>
            {content}
          </p>
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150
        </div>
        <div className={styles.blogCommentSection}>
          <h2>Comment</h2>
          <form method="POST" className={styles.sendComment}>
            <h3>Write a comment...</h3>
            <div className={styles.userMessageInput}>
              <input type="text" placeholder="Your Name..." className="userCommentName" />
              <textarea name="message" placeholder="Your message..." id="userCommentMessage" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" onClick={(e) => submitComment(e)}>Send</button>
          </form>
          <ul>
            {commentsData.result.map((comment, index) => {
              if (comment.blogId === _id) {
                return (
                  (
                    <li key={index}>
                      <div className={styles.commentHeader}>
                        <div className={styles.userComment}>
                          <FontAwesomeIcon icon={faUserCircle} />
                          <span>{comment.userName}</span>
                        </div>
                        <span className={styles.dateSent}>{comment.date}</span>
                      </div>
                      <div className={styles.userMessage}>
                        <p>{comment.message}</p>
                      </div>
                    </li>
                  )
                )
              }
            })}
          </ul>
        </div>
      </div>

      <div className={styles.otherBlogsCard}>
        <h3 className="text-5xl font-serif font-bold underline capitalize tracking-wider">See other blogs</h3>
        <div className={styles.blogCards}>
          {blogsData.result.map((blogItem, index) => (
            <BlogCard
<<<<<<< HEAD
              key={blogItem.id}
              id={blogItem.id}
              image={blogItem.image}
              comments={blogItem.comments}
              likes={blogItem.likes}
              class="hover:shadow-2xl hover:scale-150"
=======
              key={blogItem.userId}
              id={index}
              title={blogItem.title}
              image={blogItem.coverImg}
              comments={blogItem.numberOfComments}
              likes={blogItem.like}
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150
            />
          ))}
        </div>
      </div>
      <Footer />
    </div></div>
  );
}

<<<<<<< HEAD
export async function getServerSideProps(context) {
  return {
      props: {},
  };
}
=======
export const getServerSideProps = async () => {
  const resBlogs = await fetch('http://localhost:3000/api/blogs/fetchBlogs');
  const resBlogComments = await fetch('http://localhost:3000/api/blogs/comments/fetchComments');
  const blogsData = await resBlogs.json();
  const commentsData = await resBlogComments.json();

  return {
    props: { blogsData, commentsData }
  }
}
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150
