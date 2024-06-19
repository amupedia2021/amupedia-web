import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Footer from "components/common/Footer";

export default function BTech() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="M.B.B.S" />
      {/* <!-- content of B.com section  --> */}
      <section id={styles.btcontent}>
        <div className={styles.mission}>
          <h2>M.B.B.S</h2>
          <p>
MBBS stands for "Bachelor of Medicine, Bachelor of Surgery." It is an undergraduate degree awarded to students upon completion of medical school in countries following the tradition of the United Kingdom. The MBBS program typically lasts five to six years and covers a broad range of subjects essential for a career in medicine, including anatomy, biochemistry, pharmacology, pathology, and clinical skills.
          </p>
        </div>

        <h2>Choose Your Branch</h2>
        <div id={styles.branches}>
          
          <a
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.acc}>
              <p>Anatomy</p>
            </div>
          </a>
          <a
            // href="https://drive.google.com/file/d/1Wv_WY3hosCgXQ7aIMW_UN3nqRn_yjkQ8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.ae}>
              <p>Biochemistry</p>
            </div>
          </a>
          <a
            // href="https://drive.google.com/file/d/1TjlG4xT2Jcp36OcEzgfYV__8er4NHnQn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.bnk}>
              <p>Physiology</p>
            </div>
          </a>
          <a
            // href="https://drive.google.com/file/d/1UxIUbgLSEyvXJBvYzouA8RoXd-SKXCaB/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.ins}>
              <p>Community Medicine </p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
