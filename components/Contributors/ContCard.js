import React from 'react';
import styles from '@styles/Contributor.module.css';
const ContCard = (props) => {
  var x = '';
  const { image, title, commits, profile} = props;
  if (commits === 1) {
    var x = 'commit';
  } else {
    var x = 'commits';
  }

  const openContributorProfile = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div
        className={styles.card}
        onClick={() => openContributorProfile(profile)}
      >
        <img className={styles.profile} src={`https://images.weserv.nl/?output=webp&url=${image}`} alt='Contributor' />
        <div className={styles.content}>
          <h1 className={styles.text}>{title}</h1>
          <p>
            {commits} {x}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContCard;