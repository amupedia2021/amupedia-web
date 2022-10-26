import { useRouter } from 'next/router';
import OppDetails from 'components/OppDetails';

export default function BlogId() {

	const router = useRouter();
	const { oppId } = router.query;
	return <div><OppDetails></OppDetails></div>;
}
