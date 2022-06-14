import styles from '@styles/scss/subjcard.module.scss';
import Link from 'next/link';

const SubjCard = ({ details }) => {
	return (
		<>
			<div className={styles.subject}>
				<span className={styles.name}>{details.name}</span>
				<button className={styles.visitBtn}>
					<Link href="" passHref>
						<a>Visit</a>
					</Link>
				</button>
			</div>
		</>
	);
};

export default SubjCard;
