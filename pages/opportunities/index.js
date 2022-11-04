import Footer from "components/Footer";
import Header from "components/Header";
import OppCard from "components/OppCard";
import styles from "@styles/oppCard.module.css";



const Index = ( dataOpp) => {
  console.log(dataOpp);
  return (
    <div>
      <Header
        image={"/images/about/about_bg.svg"}
        text={"Opportunities"}
      ></Header>
      <article className={styles.mainBody}>
        {
        dataOpp.result.result.map((data)=>(
          <OppCard key={data.id} data={data} />
        )
        )
      }
      </article>
      <Footer />
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:3000/api/opportunities/fetchOpportunities");
  const result = await data.json();
console.log(result);
  return {
    props: {
      result
  }
}
}