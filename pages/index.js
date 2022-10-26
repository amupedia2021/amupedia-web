// import Head from "next/head";
<<<<<<< HEAD
import { useState } from 'react';
import Image from 'next/image';
import pdf from '@images/home/pdf.svg';
import chap_yt from '@images/home/yt.svg';
import quiz from '@images/home/test_and_quiz.svg';
import assign from '@images/home/assignment.svg';
import Tilt from 'react-vanilla-tilt';
import styles from '@styles/Home.module.css';
import Header from 'components/Header';
import Link from 'next/link';
import Footer from 'components/Footer';


=======
import { useState, useContext } from "react";
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
import { Store } from "utils/Store/Store";
import Preloader from "components/Preloader";
import axios from "node_modules/axios/index";
>>>>>>> 073db4a8a5f39f3e4557b5dd7ac3a5d5b01ea25b

export default function Home() {
  const { dispatch } = useContext(Store);

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
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/submitForm", form);
      const data = await res.data;
      console.log(data);
      dispatch({
        type: {
          task: "setAlert",
          alert: { type: "noti", message: "Form Submitted Successfully" },
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setForm(emptyForm);
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 073db4a8a5f39f3e4557b5dd7ac3a5d5b01ea25b

          {/* <!-- grab your notes section  --> */}
          <div className={styles.courses} id="courses">
            <h2 className={styles.grabh2}>Grab Your Notes Here</h2>
            <div className={styles.grabnotes}>
              <Link passHref href="/courses/btech">
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab1}>
                    <p>B.Tech</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href="/">
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab2}>
                    <p>B.E</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href="/">
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab3}>
                    <p>B.Com</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href="/">
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
            <Link passHref href="/">
              <Tilt className={styles.tlt}>
                <div className={styles.rec1}>
                  <p>App</p>
                </div>
              </Tilt>
            </Link>
            <Link passHref href="/">
              <Tilt className={styles.tlt}>
                <div className={styles.rec2}>
                  <p>Blogs</p>
                </div>
              </Tilt>
            </Link>
            <Link passHref href="/">
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
            <button type="submit" id={styles.sub}>
              {loading ? <Preloader /> : <p>Submit</p>}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
