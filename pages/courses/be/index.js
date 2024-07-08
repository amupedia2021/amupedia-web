import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Footer from "components/common/Footer";
import links from "../config";

export default function BTech() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="BE" />
      {/* <!-- content of B.Sc section  --> */}
      <section id={styles.btcontent}>
        <div className={styles.mission}>
          <h2>BE</h2>
          <p>
          BE stands for Bachelor of Engineering. It's an undergraduate degree program typically spanning four years. BE courses offer students a comprehensive understanding of engineering disciplines such as Civil Engineering, 
          Mechanical Engineering, Electrical Engineering, Computer Engineering, Chemical Engineering, and more. Through theoretical studies and practical applications, BE programs equip students with the skills and knowledge necessary
           for careers in various engineering fields.
           </p>
        </div>

        <h2>Choose Your Branch</h2>
        <div id={styles.branches}>
          
          <a
            href={links.biology}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.bio}>
              <p>Biology</p>
            </div>
          </a>
          <a
            href={links.computerScience}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.csc}>
              <p>Computer Science</p>
            </div>
          </a>
          <a
            href={links.chemistry}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>Chemistry</p>
              
            </div>
          </a>
          <a
            href={links.math}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.math}>
              <p>Mathematics</p>
              
            </div>
          </a>
          <a
            href={links.physics}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.phy}>
              <p>Physics</p>
              
            </div>
          </a>
          <a
            href={links.nursing}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.nur}>
              <p>Nursing</p>
            </div>
          </a>
          <a
            href={links.agriculture}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.agr}>
              <p>Agriculture</p>
              
            </div>
          </a>
          
        </div>
      </section>
      <Footer />
    </>
  );
}
