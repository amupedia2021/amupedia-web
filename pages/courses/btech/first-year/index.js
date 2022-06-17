import Footer from 'components/Footer';
import Header from 'components/Header';
import Sems from 'components/Sems';
import { firstYearSems } from 'data/semData';

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
