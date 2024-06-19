import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import Sems from "components/Curriculum/Sems";
import { firstYearSems } from "data/semData";
import styles from '@styles/Home.module.css';
const FoodEngineering = () => {
  return (
    <div>
      <Header image="/images/blog/blog_bg.svg" text="Food Engineering" />
      <div
            data-aos='fade-up'
            className={styles.ourserv}
            id={styles.ourserv}
          >
            <h2>First Year</h2>
      /</div>
      <Sems data={firstYearSems} />
      {/* second yr */}
      <div
            data-aos='fade-up'
            className={styles.ourserv}
            id={styles.ourserv}
          >
            <h2>Second Year</h2>
      /</div>
      <Sems data={firstYearSems} />
      {/* third Year*/}
      <div
            data-aos='fade-up'
            className={styles.ourserv}
            id={styles.ourserv}
          >
            <h2>Third Year</h2>
      /</div>
      <Sems data={firstYearSems} />
      {/* fourth */}
      <div
            data-aos='fade-up'
            className={styles.ourserv}
            id={styles.ourserv}
          >
            <h2>Fourth Year</h2>
      /</div>
      <Sems data={firstYearSems} />
      <Footer />
    </div>
  );
};

export default FoodEngineering ;
