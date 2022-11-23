import Head from "next/head";
import BlogCard from "components/BlogCard";
import Footer from "components/Footer";
import Header from "components/Header";
import styles from "@styles/scss/blog.module.scss";
// import blogData from "/data/blogdata";

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3000/api/blogs/fetchBlogs');
	const blogsData = await res.json();

	return {
		props: { blogsData }
	}
}

export default function Blogs({ blogsData }) {
	return (
		<>
			<Head>
				<title>Blogs | Amupedia</title>
				<meta name="description" content="Check out our blog posts." />
			</Head>
			<Header image="/images/blog/blog_bg.svg" text="Blogs" />
			{/* <Link href="/blog/writeblog">Write a blog</Link> */}
			<div className={styles.container}>
				{blogsData.result.map((blogItem, index) => (
					<BlogCard
						key={blogItem.userId}
						id={index}
						title={blogItem.title}
						image={blogItem.coverImg}
						comments={blogItem.numberOfComments}
						likes={blogItem.like}
					/>
				))}
			</div>
			<Footer />
		</>
	);
}
