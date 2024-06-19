import Header from "components/common/Header/Header";
import styles from "@styles/Btech.module.css";
import Link from "next/link";
import Footer from "components/common/Footer";

export default function BTech() {
  const image = "/images/btech/top_bg.jpg";
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
          {/* <Link passHref href="/courses/btech/first-year">
            <a>
              <div className={styles.brnch} id={styles.firstyear}>
                <p>First </p>
                <p>Year</p>
              </div>
            </a>
          </Link> */}
          {/* <a
            href="https://drive.google.com/drive/folders/1Gkjz-kR4J-EbRn-Wf-9bGbh7qH-x5ZDt?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.ai}>
              <p>Artificial Intelligence</p>
            </div>
          </a> */}

        <Link passHref href="/courses/btech/ComputerEngineering">  
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.cs}>
              <p>Computer Engineering</p>
            </div>
          </a>
          </Link>
          <Link passHref href="/courses/btech/ElectronicsEngineering">  
          <a
            // href="https://drive.google.com/drive/folders/1zBbCWFSqLRdBudn0BZxLx6BMuhCx86eX?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.elb}>
              <p>Electronics Engineering</p>
            </div>
          </a>
            </Link>
            <Link passHref href="/courses/btech/ElectricalEngineering"> 
          <a
            href="https://drive.google.com/drive/folders/1cdbwEwPktPVo5ejCK37Q7NLQaawOrRxJ?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.elec}>
              <p>Electrical Engineering</p>
            </div>
          </a>
          </Link>
          <Link passHref href="/courses/btech/MechanicalEngineering"> 
          <a
            href="https://drive.google.com/drive/folders/1QzaqFWmk7hk7cN7CuSLhBcKYOwxeDspg?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.mech}>
              <p>Mechanical Engineering</p>
            </div>
          </a>
          </Link>
          <Link passHref href="/courses/btech/CivilEngineering"> 
          <a
            href="https://drive.google.com/drive/folders/1pCPek9WPzilXKngSa3FFYq-BxudXjZXg?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.civil}>
              <p>Civil</p>
              <p>Engineering</p>
            </div>
          </a>
          </Link>
          <Link passHref href="/courses/btech/ChemicalEngineering"> 
          <a
            href="https://drive.google.com/drive/folders/1fCciCZhLUx7dFFP_n1hfE0lJEBC53xq6?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.chem}>
              <p>Chemical Engineering</p>
            </div>
          </a>
          </Link>
          <Link passHref href="/courses/btech/FoodEngineering"> 
          <a
            href="https://drive.google.com/drive/folders/1U6XgFEsH6aMi30hDQlwBPJSOPLZUmgtM?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.food}>
              <p>Food</p>
              <p>Technology</p>
            </div>
          </a>
          </Link>
          <Link passHref href="/courses/btech/EceEngineering"> 
          <a
            href="https://drive.google.com/drive/folders/1YVAoa4S8cJ5Jh1E1WJjedEdLTqvNPVjl?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.brnch} id={styles.cs}>
              <p>ECE</p>
              <p>AI</p>

            </div>
          </a>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
