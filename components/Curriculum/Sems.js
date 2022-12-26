import styles from '@styles/scss/sems.module.scss';
import SubjCard from './SubjCard';

const Sems = ({ data }) => {
  return (
    <section className={styles.main}>
      {data.map((sem, index) => {
        return (
          <div className={styles.semWrapper} key={index}>
            {sem.name && <h2 className={styles.semNum}>{sem.name}</h2>}
            {sem.subjects.map((sub, idx) => {
              return <SubjCard details={sub} key={idx}></SubjCard>;
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Sems;
