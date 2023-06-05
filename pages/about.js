import Head from "next/head";
import Header from "components/common/Header/Header";
import styles from "@styles/scss/main.module.scss";
import Footer from "components/common/Footer";
import Team from "components/Team/Team";
import GoToTop from "components/GoToTop";

export default function About() {
  const image = "/images/about/about_bg.svg";
  return (
    <>
      <GoToTop />
      <Head>
        <title>About | Amupedia</title>
        <meta
          name="description"
          content="Amupedia is the biggest platform to help fellow students through their college program."
        />
      </Head>
      <Header image={image} text="About Us" />
      <main id={styles.content}>
        {/* <!-- About Us Container --> */}
        <div className={styles.whoWeAre}>
          <h2>What is Amupedia</h2>
          <p>
            Founded by the students of ZHCET in 2021, Amupedia is the biggest
            platform to help fellow students through their college program. This
            initiative will cater to the academic demands of the students and
            assist them in every way possible. Everyone out there is
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
            The life of any student is not as easy as it may seem. There are 
            numerous challenges faced by students, and we aim to address them 
            through this website. Finding the correct documents, reference books, 
            and video lectures can save you a significant amount of time and allow 
            you to accomplish more than you initially planned. Additionally, we 
            provide information on competitive exams such as GATE and SSCJE, as 
            well as notify you about verified internship opportunities. AMUPedia 
            is dedicated to supporting all students and our primary mission is to 
            assist you in building a bright future for yourself.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
