import Header from "../common/Header/Header";
import Footer from "../common/Footer";
import { useState } from "react";
import Taskbar from "./Taskbar";
import styles from "@styles/scss/subject.module.scss";
import Notes from "./Notes";

const Subject = ({ data }) => {
  const [section, setSection] = useState("notes");

  return (
    <div>
      <Header image={data.bgImg} text={data.name} />
      <div className={styles.main}>
        <Taskbar section={section} setSection={setSection} />
        {section === "notes" && <Notes units={data.units}></Notes>}
      </div>
      <Footer />
    </div>
  );
};

export default Subject;
