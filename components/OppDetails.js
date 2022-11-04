import styles from "../styles/OppDetails.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/index";
import React from "react";

function OppDetails(data) {
  return (
    <div className={styles.main}>
      {console.log(data)}
      <div className={styles.header}>
        <h2>{data.data.title}</h2>
        <button className={styles.applyBtn}>Apply Now</button>
      </div>
      <span className={styles.date}>{data.data.date}</span>

      <div className={styles.body}>
        <p>

        </p>
      </div>
      <div className={styles.footer}>
        <button className={styles.applyBtn}>Apply Now</button>
        <a href="#">
          Explore More Opportunities
          <FontAwesomeIcon  icon={faChevronRight} />
        </a>

      </div>
    </div>
  );
}

export default OppDetails;
