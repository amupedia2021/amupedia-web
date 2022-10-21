import Head from 'next/head';
import BlogCard from 'components/BlogCard';
import Footer from 'components/Footer';
import Header from 'components/Header';
import styles from '@styles/scss/blog.module.scss';
import blogData from '/data/blogdata';

export default function Blogs() {
	return (
		<>
			<Head>
				<title>Blogs | Amupedia</title>
				<meta
					name="description"
					content="Check out our blog posts."
				/>
			</Head>
			<Header image="/images/blog/blog_bg.svg" text="Blogs" />
			{/* <Link href="/blog/writeblog">Write a blog</Link> */}
			<div className={styles.container}>
				{blogData.map((blogItem) => (
					<BlogCard
						key={blogItem.id}
						id={blogItem.id}
						image={blogItem.image}
						comments={blogItem.comments}
						likes={blogItem.likes}
					/>
				))}
			</div>
			<Footer />
		</>
	);
}
