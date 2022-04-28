import BlogCard from 'components/BlogCard';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Link from 'next/link';
import styles from '@styles/scss/blog.module.scss';

export default function Blogs() {
	return (
		<>
			<Header image="/images/blog/blog_bg.svg" text="Blogs" />
			{/* <Link href="/blog/writeblog">Write a blog</Link> */}
			<div className={styles.container}>
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
			<Footer />
		</>
	);
}
