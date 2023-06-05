import styles from "@styles/scss/blogcard.module.scss";
import Image from "next/image";
import dataScienceImg from "@images/blog/dataScience.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const BlogCard = (props) => {
  const { id, image, comments, likes } = props;
  return (
    <>
      <Link
        href={`/blog/${id == undefined ? (id == null ? "" : id) : id}`}
        passHref
      >
        <div className={styles.cover}>
          <div className={styles.image}>
            <Image src={dataScienceImg} alt="data-science-amupedia-blogs" />
          </div>
          <h3 className={styles.title}>
            How to become a data scientist in no time
          </h3>
          <div className={styles.blogfooter}>
            <span className={styles.author}>Author</span>
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
