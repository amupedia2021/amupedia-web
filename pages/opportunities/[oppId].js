import OppDetails from "components/OppDetails";
import fetchOpportunityById from "utils/getDataFromDB/opportunities/fetchOpportunityId";

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