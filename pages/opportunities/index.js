import Footer from "components/Footer";
import Header from "components/Header";
import OppCard from "components/OppCard";
import styles from "@styles/oppCard.module.css";
import Link from "node_modules/next/link";



const Index = (dataOpp) => {

  return (
    <div>
      <Header
        image={"/images/about/about_bg.svg"}
        text={"Opportunities"}
      ></Header>
      <article className={styles.mainBody}>
        {
        dataOpp.result.result.map((data,index)=>(

          <Link href={`/opportunities/${index}`}>
            <a href={`/opportunities/${index}`}>
          <OppCard key={data.id} data={data} />
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

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/opportunities/fetchOpportunities");
  const result = await data.json();
console.log(result);
  return {
    props: {
      result
  }
}
}