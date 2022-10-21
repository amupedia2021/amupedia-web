import styles from "@styles/scss/taskbar.module.scss";

const Taskbar = ({ section, setSection }) => {
  return (
    <>
      <div className={styles.main}>
        <div
          className={`${styles.notes} ${section === "notes" && styles.active}`}
          onClick={() => {
            setSection(() => "notes");
          }}
        >
          <span>Notes</span>
        </div>
        <div
          className={`${styles.lectures} ${
            section === "lectures" && styles.active
          }`}
          onClick={() => {
            setSection(() => "lectures");
          }}
        >
          <span>Lectures</span>
        </div>
        <div
          className={`${styles.assignments} ${
            section === "assignments" && styles.active
          }`}
          onClick={() => {
            setSection(() => "assignments");
          }}
        >
          <span>Assignments</span>
        </div>
        <div
          className={`${styles.papers} ${
            section === "papers" && styles.active
          }`}
          onClick={() => {
            setSection(() => "papers");
          }}
        >
          <span>Papers</span>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
