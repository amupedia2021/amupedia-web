import { useRouter } from 'next/router';

export default function BlogId() {
	const router = useRouter();
	const { blogId } = router.query;
	return <div>Blog number - {blogId}</div>;
}
