import React from 'react';
import styles from '@styles/Contributor.module.css';
import { FaGithub } from 'react-icons/fa';

const ContCard = (props) => {
  var x = '';
  const { image, title, commits, profile, githubUsername } = props;
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
        <img loading="lazy" className={styles.profile} src={`https://images.weserv.nl/?output=webp&url=${image}`} alt='Contributor' />
        <div className={styles.content}>
          <h1 className={styles.text}>{title}</h1>
          <p>
            {commits} {x}
          </p>
        </div>
        <div className={styles.githubIcon} >
          <a  href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
            <FaGithub size={31} />
          </a>
          <span className={styles.githubName}>Github</span>
        </div>
      </div>
    </>
  );
};

export default ContCard;
