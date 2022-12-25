import styles from "@styles/Header.module.css";
import Wave from "./Wave";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = (props) => {
  const { image, text } = props;
  return (
    <>
    <Navbar />
      <div
        className={styles.headerWrapper}
        style={{
          height: "500px",
          position: "relative",
        }}
        id="header"
      >
        {/* <!-- background on top --> */}
        <div className={styles.headerbg}>
          <Image
            src={image}
            layout="fill"
            className={"headerImage"}
            alt="Intro to the page"
          />
        </div>

        <motion.div
          className={styles.center_text}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
        >
          <p>{text}</p>
          {text === "Amupedia" && (
            <p className={styles.subline}>Achieving excellence together</p>
          )}
        </motion.div>
        <Wave />
      </div>
    </>
  );
};

export default Header;
