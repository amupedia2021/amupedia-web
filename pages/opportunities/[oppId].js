import { useRouter } from "next/router";
import OppDetails from "components/Opportunities/OppDetails";

export default function OppDetailsId({ opportunityDetail }) {
  return (
    <OppDetails
      data={opportunityDetail}
    ></OppDetails>
  );
}

export const getServerSideProps = async (context) => {
  const { oppId } = context.query;
  const opportunityDetail = await fetchOpportunityById(oppId)
  return {
    props: { opportunityDetail },
  }
};