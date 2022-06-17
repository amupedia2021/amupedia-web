import styles from '@styles/scss/sems.module.scss';
import SubjCard from '@comp/SubjCard';

const Sems = ({ data }) => {
	return (
		<section className={styles.main}>
			{data.map((sem) => {
				return (
					<div className={styles.semWrapper} key={sem.id}>
						{sem.name && <h2 className={styles.semNum}>{sem.name}</h2>}
						{sem.subjects.map((sub) => {
							return <SubjCard details={sub} key={sub.id}></SubjCard>;
						})}
					</div>
				);
			})}
		</section>
	);
};

export default Sems;
