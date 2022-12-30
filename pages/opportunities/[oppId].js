import OppDetails from 'components/Opportunities/OppDetails';
import fetchOpportunityById from 'utils/getDataFromDB/opportunities/fetchOpportunityId';

export default function OppDetailsId({ opportunityDetail }) {
  return <OppDetails data={opportunityDetail} />;
}

export const getServerSideProps = async (context) => {
  const { oppId } = context.query;
  const opportunityDetail = await fetchOpportunityById(oppId);
  console.log(opportunityDetail);
  return {
    props: { opportunityDetail },
  };
};
