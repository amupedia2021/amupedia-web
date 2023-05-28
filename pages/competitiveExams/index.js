import Header from "components/common/Header/Header";
import styles from "@styles/Competitive.module.css";
import Footer from "components/common/Footer";
import { competitiveExams } from "data/examData";
import Exams from "components/Curriculum/Exams";

export default function CompetitiveExams() {
  const image = "/images/btech/top_bg.jpg";
  return (
    <>
      <Header image={image} text="Competitive Exams" />
      <div id={styles.branches}>
        <Exams data={competitiveExams}></Exams>
      </div>
      <Footer />
    </>
  );
}
