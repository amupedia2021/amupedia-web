import Footer from "components/Footer";
import Header from "components/Header";
import Link from "next/link";

export default () => {
	return (
		<>
			<Header image="/images/blog/blog_bg.svg" text="Blogs" />
			<Link href="/blog/writeblog">Write a blog</Link>
			<Footer />
		</>
	);
};
