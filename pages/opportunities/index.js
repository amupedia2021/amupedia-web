import Footer from "components/Footer";
import Header from "components/Header";
import OppCard from "components/OppCard";
import styles from "@styles/oppCard.module.css";

const Index = () => {
  return (
    <div>
      <Header
        image={"/images/about/about_bg.svg"}
        text={"Opportunities"}
      ></Header>
      <article className={styles.mainBody}>
        <OppCard />
        <OppCard />
        <OppCard />
        <OppCard />
      </article>
      <Footer />
    </div>
  );
};

export default Index;
