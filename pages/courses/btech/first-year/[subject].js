import Subject from 'components/Subject';
import { useRouter } from 'next/router';
import { subjectPages } from 'data/semData';

const GeneralSubject = () => {
	const router = useRouter();
	const { subject } = router.query;
	const data = subjectPages[subject];

	return (
		<>
			<Subject data={data}></Subject>
		</>
	);
};

export default GeneralSubject;
