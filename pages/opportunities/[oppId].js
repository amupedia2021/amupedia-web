import { useRouter } from "next/router";
import OppDetails from "components/OppDetails";

export default function BlogId(dataOppDetails) {
  const router = useRouter();
  const { oppId } = router.query;

  const oppArr = dataOppDetails.result.result;

  return (
    <div>
<OppDetails key={oppId} data={oppArr[oppId]}></OppDetails>;

    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(
    "http://localhost:3000/api/opportunities/fetchOpportunities"
  );

  const result = await data.json();
  return {
    props: {
      result,
    },
  };
};
