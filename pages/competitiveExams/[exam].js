import Header from "components/common/Header/Header";
import { useRouter } from "node_modules/next/router";
import ExamCard from "components/Curriculum/ExamCard";
import { getExamDetails } from "data/examData";

export default function ExamDetails() {
  const router = useRouter();
  let data;
  data = getExamDetails(router.query.exam);
  return (router.isReady &&
    <>
      <Header text={data.title} />
      <ExamCard data={data}></ExamCard>
    </>
  );
}
