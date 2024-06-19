import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Footer from "components/common/Footer";

export default function BSc() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="B.Sc" />
      {/* <!-- content of B.Sc section  --> */}
      <section id={styles.btcontent}>
        <div className={styles.mission}>
          <h2>B.Sc</h2>
          <p>
          BSc means Bachelor of Science. It's a three-year undergraduate science programme.
          The BSc courses provides students with theoretical and practical knowledge of 
          science subjects such as Chemistry, Physics, Biology, Mathematics, Computer Science, Nursing, and Agriculture.
          </p>
        </div>

        <h2>Choose Your Branch</h2>
        <div id={styles.branches}>
          
          <a
            href="https://drive.google.com/file/d/1SRfFI6MPyaJJXDp4LK7AgqgNGSSLP3L3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.bio}>
              <p>Biology</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1E8LgRucBaV1qHVovVjJc3c0JH7IRHmye/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.csc}>
              <p>Computer Science</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1MSu8-ViOvVEzfOoEY75a3mJkXoudRmxB/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>Chemistry</p>
              
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1gSnoQhkfyrFBJQMhXZjByJrN392XXhJq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.math}>
              <p>Mathematics</p>
              
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1odvzfXP4HAUBeY5z89N8z66UtNGxTpsb/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.phy}>
              <p>Physics</p>
              
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/18F5QwqkYzoLZm_BOQ74_0FRK-8J2C5AY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.nur}>
              <p>Nursing</p>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1iuxcQrntJZw5q3zoQUiVSZ_bfAbyG0Y_/view?usp=sharing"
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
