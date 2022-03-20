import styles from '@styles/scss/sems.module.scss';
import Link from 'next/link';

const Sems = () => {
	return (
		<section className={styles.main}>
			<div className={styles.semWrapper}>
				<h2 className={styles.semNum}>Semester Number</h2>
				<ul className={styles.subjects}>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-1</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-2</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-3</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-4</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-5</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-6</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-7</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span>subject-8</span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-9 </span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
					<li className={styles.subjItem}>
						<div className="subj">
							{' '}
							<span> subject-10 </span>
							<Link href="">
								<a href="">Visit</a>
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Sems;
