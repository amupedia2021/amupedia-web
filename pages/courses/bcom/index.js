import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Footer from "components/common/Footer";

export default function BCom() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="B.Com" />
      {/* <!-- content of B.com section  --> */}
      <section id={styles.btcontent}>
        <div className={styles.mission}>
          <h2>B.Com</h2>
          <p>
             BCom is a three-year undergraduate degree focusing on commerce, economics,business law, accountancy, taxation, and financing. 
             BCom is the foundation upon which subsequent studies can be constructed.
             Students with a commerce background in class 12 usually go for BCom during UG Admission.
          </p>
        </div>

        <h2>Choose Your Branch</h2>
        <div id={styles.branches}>
          
          <a
            href="https://drive.google.com/file/d/1hc-Tu7O2rbNQQ1oOP4LEc4ZPyN5ZsyMP/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.acc}>
              <p>Accountancy</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1Wv_WY3hosCgXQ7aIMW_UN3nqRn_yjkQ8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.ae}>
              <p>Applied Economics</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1TjlG4xT2Jcp36OcEzgfYV__8er4NHnQn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.bnk}>
              <p>Banking </p>
              <p>and Finance</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1UxIUbgLSEyvXJBvYzouA8RoXd-SKXCaB/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.ins}>
              <p>Banking </p>
              <p>and Insurance</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1cv6k1uIDhKjmQ_vemvZ2DMqZxfeIifv3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.adm}>
              <p>Business </p>
              <p>Administration</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/11AqWoX7zueB10loH9rr-waNMxPo0bFk7/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.com}>
              <p>Computer Applications</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1dU4r0Adv2GWp_Jd4vr20CsnguIQ6sWP7/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.ecom}>
              <p>E-Commerce</p>
              
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1QVn0gib2BeV8Cl5r5oRitbfmxbp073rU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.for}>
              <p>Foreign Trade Management</p>
              

            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
