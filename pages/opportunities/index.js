import Footer from "components/Footer";
import Header from "components/Header";
import OppCard from "components/OppCard";
import styles from "@styles/oppCard.module.css";
import Link from "next/link";
import fetchOpportunities from "utils/getDataFromDB/opportunities/fetchOpportunities";

function Opportunities({ opportunities }) {
  return (
    <div>
      <Header
        image={"/images/about/about_bg.svg"}
        text={"Opportunities"}
      ></Header>
      <article className={styles.mainBody}>
        {
          opportunities?.map((data) => (
            <Link href={`/opportunities/${data.id}`} key={data.id}>
              <a href={`/opportuities/${data.id}`}>
                <OppCard data={data} />
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

export default Opportunities;

export async function getServerSideProps() {
  const opportunities = await fetchOpportunities()
  return {
    props: { opportunities },
  }
}
