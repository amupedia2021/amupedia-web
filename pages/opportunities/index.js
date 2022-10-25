import Footer from "components/Footer";
import Header from "components/Header";
import OppCard from "components/OppCard";
import styles from "@styles/oppCard.module.css";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Header
        image={"/images/about/about_bg.svg"}
        text={"Opportunities"}
      ></Header>
      <article className={styles.mainBody}>
        <Link passHref href="opportunities/OppDetailsId">
          <a className={styles.anchor} href="opportunities/OppDetailsId">
            <OppCard />
          </a>
        </Link>
        {/* <Link passHref href="./[cardId].js">
          <OppCard />
        </Link>
        <Link passHref href="./[cardId].js">
          <OppCard />
        </Link>
        <Link passHref href="./[cardId].js">
          <OppCard />
        </Link>
        <Link passHref href="./[cardId].js">
          <OppCard />
        </Link> */}
      </article>
      <Footer />
    </div>
  );
};

export default Index;
