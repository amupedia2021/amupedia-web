import Header from "components/Header";
import styles from "@styles/scss/main.module.scss";
import Footer from "components/Footer";
import Team from "components/Team";

export default () => {
	const image = "/images/about/about_bg.svg";
	return (
		<>
			<Header image={image} text="About Us" />
			<main id={styles.content}>
				{/* <!-- About Us Container --> */}
				<div className={styles.whoWeAre}>
					<h2>What is Amupedia</h2>
					<p>
						Founded by the students of ZHCET in 2021, Amupedia is the biggest
						platform to help fellow students through their college program. This
						initiative will cater to the academic demands of the students and
						give assistance to them in every way possible. Everyone out there is
						running in the race to the top, and we here offer a push to anyone
						who needs it. Whether you come for the notes, read our blogs, or
						attend our events, you will emerge from Amupedia with new knowledge,
						perspective, influences, and connections.
					</p>
				</div>

				<Team />

				{/* Our Story  */}
				<div className={`${styles.whoWeAre} ${styles.ourStory}`}>
					<h2>Our Story</h2>
					<p>
						The life of any student is not as easy as it may look like. There
						are so many problems of every student out there that we plan to
						tackle single-handedly with this website. Finding all the right
						documents and reference books (and with reference video lectures)
						can save a lot of your time and help you check off more things than
						you plan to. To that, we're even providing information on various
						competitive exams like GATE, SSCJE, etc.. and notify you about
						verified sources of internships. AMUPedia is only looking out for
						all the students out there and our sole mission is to help you in
						making a bright future for yourself.
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
};
