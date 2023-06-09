import styles from '@styles/scss/sems.module.scss';
import SubjCard from './SubjCard';

function Sems({ data }) {
  return (
    <section className={styles.main}>
      {data.map((sem, index) => (
        <div className={styles.semWrapper} key={index}>
          {sem.name && <h2 className={styles.semNum}>{sem.name}</h2>}
          {sem.subjects.map((sub, idx) => (
            <SubjCard details={sub} key={idx} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Sems;
