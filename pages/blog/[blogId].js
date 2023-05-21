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
import BlogCard from "components/Blogs/BlogCard";
import blogData from "/data/blogdata";
import Link from "next/link";
import fetchBlogId from "utils/getDataFromDB/blogs/fetchBlogId";
import fetchBlogComment from "utils/getDataFromDB/blogs/comments/fetchComments";
import fetchBlogs from "utils/getDataFromDB/blogs/fetchBlogs";

export default function BlogId({ blogsData, blogData, commentsData }) {
  const { userId, title, coverImg, content, id } = blogData;

  const submitComment = async (e) => {
    e.preventDefault();
    const message = document.getElementById("userCommentMessage").value;
    const userCommentName = document.querySelector(".userCommentName").value;
    const blogId = id;
    if (message.length < 3) {
      return alert("Message must longer than  3 characters")
    }
    if (userCommentName < 3) {
      return alert("Your Name must longer than  3 characters")
    }
    if (blogId.length <= 1) {
      return alert("Blog Id must be longer than 1 characters")
    }
    try {
      await axios.post("/api/blogs/comments/publishComment", { userName: userCommentName, blogId, message });
      alert("Comment has been sent!")
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className={styles.blog}>
      <div className={styles.blogDetail}>
        <div className={styles.blogHeader}>
          <h2>{title}</h2>
          <div className={styles.blogHeaderInfo}>
            <div className={styles.blogHeaderInfoLeft}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUserCircle} />
                  <span>{userId}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} />
                  <span>5 min read</span>
                </li>
                <li>
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
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#facebook">
                    <a href="#facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#linkedin">
                    <a href="#linkedin">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#blogLink">
                    <a href="#blogLink">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className={styles.bookmark_and_more_icon}>
                <FontAwesomeIcon icon={faBookmark} />
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogPicture}>
          <img src={`/images/blog/${coverImg}`}
            alt="blogDetailPicture"
          />
        </div>
        <div className={styles.blogBody}>
          <p>
            {content}
          </p>
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
            {commentsData?.map((comment, index) => (
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
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.otherBlogsCard}>
        <h3>See other blog</h3>
        <div className={styles.blogCards}>
          {blogsData?.map((blogItem, index) => (
            <BlogCard
              key={blogItem.userId}
              id={index}
              title={blogItem.title}
              image={blogItem.coverImg}
              comments={blogItem.numberOfComments}
              likes={blogItem.like}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { blogId } = context.query;
  const blogData = await fetchBlogId(blogId);
  const blogsData = await fetchBlogs()
  const commentsData = await fetchBlogComment(blogId);

  return {
    props: { blogsData, blogData: blogData[0], commentsData }
  }
}