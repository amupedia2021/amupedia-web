import styles from "@styles/scss/blogcard.module.scss";
import Image from "next/image";
<<<<<<< HEAD:components/Blogs/BlogCard.js
import dataScienceImg from "@images/blog/dataScience.webp";
=======
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150:components/BlogCard.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const BlogCard = (props) => {
<<<<<<< HEAD:components/Blogs/BlogCard.js
  const { id, image, comments, likes ,title,author} = props;
=======
  const { id, title, image, comments, likes } = props;
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150:components/BlogCard.js
  return (
    <>
      <Link
        href={`/blog/${id == undefined ? (id == null ? "" : id) : id}`}
        passHref
      >
        <div className={styles.cover}>
          <div className={styles.image}>
<<<<<<< HEAD:components/Blogs/BlogCard.js
            <Image loading="lazy" src={image} alt="data-science-amupedia-blogs"
            layout="responsive"
            width="1500"
            height="1000"/>
=======
            <Image src={`/images/blog/${image}`} width={500} height={500} alt="data-science-amupedia-blogs" />
>>>>>>> 2e3ced3f1a6c1a70341b50aee0bde119b118a150:components/BlogCard.js
          </div>
          <h3 className={styles.title}>
            {title}
          </h3>
          <div className={styles.blogfooter}>
            <span className={styles.author}>{author}</span>
            <div className={styles.info}>
              <span className={styles.likes}>
                {likes}
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className={`${styles.icon} ${styles.likesIcon}`}
                />
              </span>
              <span className={styles.comments}>
                {comments}
                <FontAwesomeIcon
                  icon={faComment}
                  className={`${styles.icon} ${styles.commentsIcon}`}
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default BlogCard;
