import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import Sems from "components/Curriculum/Sems";
import { firstYearSems } from "data/semData";

const FirstYear = () => {
  return (
    <div>
      <Header image="/images/blog/blog_bg.svg" text="First Year" />
      <Sems data={firstYearSems} />
      <Footer />
    </div>
  );
};

export default FirstYear;
