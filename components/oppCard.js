import styles from "@styles/oppCard.module.css";

const oppCard = () => {
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
        <a href="#" className={styles.link}>Apply Now</a>
      </div>
    </div>
  );
};

export default oppCard;
