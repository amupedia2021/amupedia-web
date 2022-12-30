import Footer from 'components/common/Footer';
import Header from 'components/common/Header/Header';
import OppCard from 'components/Opportunities/oppCard';
import styles from '@styles/oppCard.module.css';
import Link from 'next/link';
import fetchOpportunities from 'utils/getDataFromDB/opportunities/fetchOpportunities';

function Opportunities({ opportunities }) {
  return (
    <div>
      <Header
        image={'/images/about/about_bg.svg'}
        text={'Opportunities'}
      />
      <article className={styles.mainBody}>
        {opportunities.map((data, index) => (
          <Link href={`/opportunities/${index}`} key={index}>
            <a href={`/opportuities/${index}`}>
              <OppCard key={data.id} data={data} />
            </a>
          </Link>
        ))}
      </article>
      <Footer />
    </div>
  );
}

export default Opportunities;

export async function getServerSideProps() {
  const opportunities = await fetchOpportunities();
  return {
    props: { opportunities },
  };
}
