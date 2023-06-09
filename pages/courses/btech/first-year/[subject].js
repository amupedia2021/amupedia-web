import Subject from 'components/Curriculum/Subject';
import { getSubjectPages } from 'data/semData';

export const getStaticPaths = async () => {
  const paths = [
    {
      params: {
        subject: 'applied-mathematics-1'
      }
    },
    {
      params: {
        subject: 'applied-chemistry'
      }
    },
    {
      params: {
        subject: 'thermo-dynamics'
      }
    },
    {
      params: {
        subject: 'electrical-engineering'
      }
    },
    {
      params: {
        subject: 'environmental-studies'
      }
    },
    {
      params: {
        subject: 'applied-chemistry-lab'
      }
    },
    {
      params: {
        subject: 'computer-programming-lab'
      }
    }
  ];

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const { subject } = context.params;
  const data = getSubjectPages(subject);

  if (data == null || data == undefined) {
    return { notFound: true };
  }

  return { props: { data } };
};

function GeneralSubject({ data }) {
  return <Subject data={data} />;
}

export default GeneralSubject;
