import styles from "@styles/oppCard.module.css";
import Link from "node_modules/next/link";

const OppCard = (props) => {
  const { title, date, image } = props;
  return (
    <div className={styles.main}>
      <div className={styles.picture}>
        <h2>Image</h2>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.title}>
          <h3>Title</h3>
          <span>Date Added -</span>
        </div>
        <Link href="#">
          <a className={styles.link}>Apply Now</a>
        </Link>
      </div>
    </div>
  );
};

export default OppCard;
