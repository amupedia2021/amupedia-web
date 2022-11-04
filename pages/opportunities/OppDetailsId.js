import { useRouter } from 'next/router';
import OppDetails from 'components/OppDetails';

export default function BlogId(dataOppDetails) {
console.log(dataOppDetails.result.result[0]);
	const router = useRouter();
	const { oppId } = router.query;
	return <div><OppDetails data={dataOppDetails.result.result[0]}></OppDetails></div>;
}

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