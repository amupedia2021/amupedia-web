// import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import pdf from "@images/home/pdf.svg";
import chap_yt from "@images/home/yt.svg";
import quiz from "@images/home/test_and_quiz.svg";
import assign from "@images/home/assignment.svg";
import Tilt from "react-vanilla-tilt";
import styles from "@styles/Home.module.css";
import Header from "components/Header";
import Link from "next/link";
import Footer from "components/Footer";

export default function Home() {
	const emptyForm = {
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		address: "",
		message: "",
	};

	const headerImg = "/images/home/homeback.svg";

	const [form, setForm] = useState(emptyForm);

	const onSubmit = (e) => {
		e.preventDefault();
		setForm(emptyForm);
	};

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Header image={headerImg} text="Amupedia" />
			<main>
				<section id={styles.content}>
					{/* <!-- Our Mission Container --> */}
					<div className={styles.mission}>
						<h2>Our Mission</h2>
						<p>
							We are the students of AMU, intending to provide you all the
							quality stuff related to B.Tech, B.Com, B.E, and various other
							courses, the pdfs related to experiment, viva, and quizzes
							question, the mid and end semester examination as well as the
							assignments. We are providing all this content for free.
						</p>
					</div>

					{/* Our Services Section  */}
					<div id={styles.ourserv}>
						<h2>Our Services</h2>
						<div id={styles.ourserimgs}>
							<div>
								<Image src={pdf} alt="pdfs" />
								<p>PDFs OF ALL SUBJECTS</p>
							</div>
							<div>
								<Image src={chap_yt} alt="explaination" />
								<p>CHAPTER EXPLANATION BY YOUTUBE VIDEO</p>
							</div>
							<div>
								<Image src={quiz} alt="solutions" />
								<p>SOLUTION OF TEST AND QUIZZES</p>
							</div>
							<div>
								<Image src={assign} alt="assignments" />
								<p>ASSIGNMENTS GIVEN</p>
							</div>
						</div>
					</div>

					{/* <!-- grab your notes section  --> */}
					<div className={styles.courses} id="courses">
						<h2 className={styles.grabh2}>Grab Your Notes Here</h2>
						<div className={styles.grabnotes}>
							<Link href="/btech">
								<Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
									<div className={styles.grab1}>
										<p>B.Tech</p>
									</div>
								</Tilt>
							</Link>
							<Link href="/">
								<Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
									<div className={styles.grab2}>
										<p>B.E</p>
									</div>
								</Tilt>
							</Link>
							<Link href="/">
								<Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
									<div className={styles.grab3}>
										<p>B.Com</p>
									</div>
								</Tilt>
							</Link>
							<Link href="/">
								<Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
									<div className={styles.grab4}>
										<p>B.Sc</p>
									</div>
								</Tilt>
							</Link>
						</div>
					</div>

					{/* <!-- Recent Updates section  --> */}
					{/* <!-- same css as grabnotes section  --> */}
					<h2 className={styles.grabh2}>Recent Updates</h2>
					<div className={styles.grabnotes}>
						<Link href="/">
							<Tilt className={styles.tlt}>
								<div className={styles.rec1}>
									<p>App</p>
								</div>
							</Tilt>
						</Link>
						<Link href="/">
							<Tilt className={styles.tlt}>
								<div className={styles.rec2}>
									<p>Blogs</p>
								</div>
							</Tilt>
						</Link>
						<Link href="/">
							<Tilt className={styles.tlt}>
								<div className={styles.rec3}>
									<p>Competetive Exams</p>
								</div>
							</Tilt>
						</Link>
					</div>

					{/* <!-- Contact Form  --> */}
					<h2 className={styles.grabh2}>Get In Touch With Us</h2>
					<form onSubmit={onSubmit}>
						<div className={styles.cntfrm}>
							<input
								value={form.first_name}
								onChange={onChange}
								required
								type="text"
								name="first_name"
								placeholder="First Name"
								className={styles.details}
							/>
							<input
								value={form.last_name}
								onChange={onChange}
								required
								name="last_name"
								type="text"
								placeholder="Last Name"
								className={styles.details}
							/>
							<input
								value={form.email}
								onChange={onChange}
								required
								name="email"
								type="email"
								placeholder="Email"
								className={styles.details}
							/>
							<input
								value={form.phone}
								onChange={onChange}
								type="number"
								name="phone"
								placeholder="Phone"
								className={styles.details}
							/>
							<input
								value={form.address}
								onChange={onChange}
								required
								name="address"
								type="text"
								placeholder="Address"
								className={styles.address}
							/>
							<input
								value={form.message}
								onChange={onChange}
								required
								name="message"
								type="text"
								placeholder="Type your message here"
								className={styles.msg}
							/>
						</div>
						<input type="submit" id={styles.sub} />
					</form>
				</section>
			</main>
			<Footer />
		</>
	);
}
