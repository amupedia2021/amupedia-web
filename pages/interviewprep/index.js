import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Footer from "components/common/Footer";

export default function BTech() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="Interview Preparation" />
      {/* <!-- content of b.tech section  --> */}
      <section id={styles.btcontent}>
        <div className={styles.mission}>
          <h2>Interview Preparation</h2>
          <p>
            Interview is one of the crucial round during the Internships and placements.
            There will be generally two rounds of interview, one being the Technical 
            interview round and the second one is HR round. This section mainly focuses
            on technical round and provides material and information about various 
            organisations that provide interview preparation
          </p>
        </div>

        <div id={styles.branches}>
          
          <a
            href="https://hackerrank.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.cs}>
              <p>HackerRank</p>
            </div>
          </a>
          <a
            href="https://codeforces.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.elb}>
              <p>Codeforces</p>
            </div>
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.elec}>
              <p>LeetCode</p>
            </div>
          </a>
          <a
            href="https://www.geeksforgeeks.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.mech}>
              <p>Geeks for Geeks</p>
            </div>
          </a>
          <a
            href="https://codechef.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.civil}>
              <p>Codechef</p>
            </div>
          </a>
          <a
            href="https://interviewbit.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>InterviewBit</p>
            </div>
          </a>
          <a
            href="https://codingninjas.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>Coding Ninjas</p>
            </div>
          </a>
          <a
            href="https://atcoder.jp/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.cs}>
              <p>Atcoder</p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
