import styles from '@styles/OppDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/index';
import React from 'react';
import { isNil, isEmpty } from 'lodash';

function OppDetails(data) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        {!isEmpty(data) && <h2>{data?.title}</h2>}
        <button className={styles.applyBtn}>Apply Now</button>
      </div>
      <span className={styles.date}>{data?.date}</span>

      <div className={styles.body}>
        <p>
          corporis atque debitis. Aut provident inventore corrupti, libero vel
          maiores, ipsam, error ratione molestias adipisci ullam expedita harum.
        </p>
      </div>
      <div className={styles.footer}>
        <button className={styles.applyBtn}>Apply Now</button>
        <a href='#'>
          Explore More Opportunities
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </div>
  );
}

export default OppDetails;
