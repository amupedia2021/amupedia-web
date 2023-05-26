import React from "react";
import styles from '@styles/Contributor.module.css';
const ContCard = (props) => {
  var x=""
  const { image, title, commits } = props;
  if(commits===1){
    var x = "commit";
  }
  else{
    var x = "commits"
  }
  return (
    <>
    <div className={styles.card}>
      <img className={styles.profile} src={image} alt="Contributor" />
      <div className={styles.content}>
      <h1 className={styles.text}>{title}</h1>
      <p>{commits} {x}</p>
      </div>
    </div>
    </>
  );
};

export default ContCard;