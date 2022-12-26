import styles from "@styles/scss/subjcard.module.scss";
import Link from "next/link";

const SubjCard = ({ details }) => {
  return (
    <Link href={details.linkToPage} passHref>
      <div className={styles.subject}>
        {/* <Image></Image> */}
        <span className={styles.name}>{details.name}</span>
      </div>
    </Link>
  );
};

export default SubjCard;
