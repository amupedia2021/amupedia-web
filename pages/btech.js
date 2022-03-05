import Header from "components/Header";
import styles from "@styles/Btech.module.css";
import Link from "next/link";
import Footer from "components/Footer";

export default () => {
	const image = "/images/btech/top_bg.svg";
	return (
		<>
			<Header image={image} text="B.Tech" />
			{/* <!-- content of b.tech section  --> */}
			<section id={styles.btcontent}>
				<div className={styles.mission}>
					<h2>B.Tech</h2>
					<p>
						Bachelor of Technology (B. Tech) is a professional undergraduate
						engineering degree programme awarded to candidates after completion
						of four years of study in the field. This undergraduate programme is
						your gateway to a career in engineering. In India, a B.Tech degree
						is offered across various specialisations.
					</p>
				</div>

				<h2>Choose Your Branch</h2>
				<div id={styles.branches}>
					<Link href="/">
						<div className={styles.brnch} id={styles.cs}>
							<p>Computer Engineering</p>
						</div>
					</Link>
					<Link href="/">
						<div className={styles.brnch} id={styles.elb}>
							<p>Electronics Engineering</p>
						</div>
					</Link>
					<Link href="/">
						<div className={styles.brnch} id={styles.elec}>
							<p>Electrical Engineering</p>
						</div>
					</Link>
					<Link href="/">
						<div className={styles.brnch} id={styles.mech}>
							<p>Mechanical Engineering</p>
						</div>
					</Link>
					<Link href="/">
						<div className={styles.brnch} id={styles.civil}>
							<p>Civil</p>
							<p>Engineering</p>
						</div>
					</Link>
					<Link href="/">
						<div className={styles.brnch} id={styles.chem}>
							<p>Chemical Engineering</p>
						</div>
					</Link>
				</div>
			</section>
			<Footer />
		</>
	);
};
