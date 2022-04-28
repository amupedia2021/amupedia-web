import styles from '@styles/scss/blogcard.module.scss';
import Image from 'next/image';
import dataScienceImg from '@images/blog/dataScience.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

const BlogCard = () => {
	return (
		<>
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
							100
							<FontAwesomeIcon
								icon={faThumbsUp}
								className={`${styles.icon} ${styles.likesIcon}`}
							/>
						</span>
						<span className={styles.comments}>
							91
							<FontAwesomeIcon
								icon={faComment}
								className={`${styles.icon} ${styles.commentsIcon}`}
							/>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
