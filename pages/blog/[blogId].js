import { useRouter } from "next/router";
import Image from "next/image";
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
import BlogCard from "components/BlogCard";
// import blogData from "/data/blogdata";
import Link from "next/link";

export default function BlogId({ blogsData }) {
  const router = useRouter();
  const { blogId } = router.query;
  const blogDetail = blogsData.result[blogId];
  const { userId, title, coverImg, content, like, numberOfComments } = blogDetail;
  console.log(coverImg)
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
        </div>
      </div>
      <div className={styles.otherBlogsCard}>
        <h3>See other blog</h3>
        <div className={styles.blogCards}>
          {blogsData.result.map((blogItem, index) => (
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

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/blogs/fetchBlogs');
  const blogsData = await res.json();

  return {
    props: { blogsData }
  }
}