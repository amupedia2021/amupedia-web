import Footer from "components/Footer";
import Header from "components/Header";
import OppCard from "components/OppCard";
import styles from "@styles/oppCard.module.css";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> 073db4a8a5f39f3e4557b5dd7ac3a5d5b01ea25b

const Index = () => {
  return (
    <div>
      <Header
        image={"/images/about/about_bg.svg"}
        text={"Opportunities"}
      ></Header>
      <article className={styles.mainBody}>
<<<<<<< HEAD
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
=======
        <OppCard />
        <OppCard />
        <OppCard />
        <OppCard />
        <OppCard />
>>>>>>> 073db4a8a5f39f3e4557b5dd7ac3a5d5b01ea25b
      </article>
      <Footer />
    </div>
  );
};

export default Index;
