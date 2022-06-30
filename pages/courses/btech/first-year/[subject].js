import Subject from 'components/Subject';
import { getSubjectPages } from 'data/semData';

export const getStaticPaths = async () => {
	const paths = [
		{
			params: {
				subject: 'applied-mathematics-1',
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
			<Subject data={data}></Subject>
      
		</>
	);
};

export default GeneralSubject;
