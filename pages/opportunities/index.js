import Head from "next/head";
import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import OppCard from "components/Opportunities/oppCard";
import styles from "@styles/oppCard.module.css";
import Link from "node_modules/next/link";
import GoToTop from "components/GoToTop";
import internshipData from "/data/internshipData";

const Index = () => {
  return (
    <div>
      <GoToTop />
			<Head>
				<title>Internships | Amupedia</title>
				<meta name="description" content="Check out our blog posts." />
			</Head>
      <Header
        image={"/images/about/about_bg.svg"}
        text={"Opportunities"}
      ></Header>

      <article className={styles.mainBody}>
      {
        internshipData.map((data)=>(
          <Link href={`/opportunities/${data.id}`} key={data.id}>
            <a href={`/opportuities/${data.id}`}>
          <OppCard title={data.title} date={data.date} image={data.image} />
          </a>
          </Link>
        )
        )
      }
      </article>
      <Footer />
    </div>
  );
};

export default Index;
