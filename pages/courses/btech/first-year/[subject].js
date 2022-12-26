import Subject from "components/Curriculum/Subject";
import { getSubjectPages } from "data/semData";

export const getStaticPaths = async () => {
  const paths = [
    {
      params: {
        subject: "applied-mathematics-1",
      },
    },
    {
      params: {
        subject: "applied-chemistry",
      },
    },
    {
      params: {
        subject: "thermo-dynamics",
      },
    },
    {
      params: {
        subject: "electrical-engineering",
      },
    },
    {
      params: {
        subject: "environmental-studies",
      },
    },
    {
      params: {
        subject: "applied-chemistry-lab",
      },
    },
    {
      params: {
        subject: "computer-programming-lab",
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  let subject = context.params.subject;
  const data = getSubjectPages(subject);

  if (data == null || data == undefined) {
    return { notFound: true };
  }

  return { props: { data } };
};

const GeneralSubject = ({ data }) => {
  return (
    <>
      <Subject data={data} />
    </>
  );
};

export default GeneralSubject;
