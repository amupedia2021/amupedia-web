import styles from "@styles/oppCard.module.css";
import Link from "next/link";

const OppCard = ({ data }) => {
  const { title, date, image } = data;
  console.log(title, date, image)
  return (
    <div className={styles.main}>
      <div className={styles.picture}>
        <img src={`/images/oppCard/${image}`} alt="opportunityImage" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
        <Link href="#">
          <a className={styles.link}>Apply Now</a>
        </Link>
      </div>
    </div>
  );
};

export default OppCard;
