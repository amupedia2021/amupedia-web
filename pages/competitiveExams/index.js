import Header from "components/common/Header/Header";
import styles from "@styles/Competitive.module.css";
import Footer from "components/common/Footer";
import { competitiveExams } from "data/examData";
import Exams from "components/Curriculum/Exams";

export default function CompetitiveExams() {
  return (
    <>
      <Header text="Competitive Exams" />
      <main>
        <section id={styles.content}>
          <div id={styles.branches}>
            <Exams data={competitiveExams}></Exams>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
