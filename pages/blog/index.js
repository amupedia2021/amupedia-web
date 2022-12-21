import Head from "next/head";
import BlogCard from "components/BlogCard";
import Footer from "components/Footer";
import Header from "components/Header";
import styles from "@styles/scss/blog.module.scss";
import fetchBlogs from "utils/getDataFromDB/blogs/fetchBlogs";

export default function Blogs({ blogsData }) {
	console.log(blogsData)
	return (
		<>
			<Head>
				<title>Blogs | Amupedia</title>
				<meta name="description" content="Check out our blog posts." />
				<Header image="/images/blog/blog_bg.svg" text="Blogs" />
			</Head>
			{/* <Link href="/blog/writeblog">Write a blog</Link> */}
			<div className={styles.container}>
				{blogsData?.map((blogItem, index) => (
					<BlogCard
						key={blogItem.id}
						id={blogItem.id}
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

export async function getServerSideProps() {
	const blogsData = await fetchBlogs()
	return {
		props: { blogsData },
	}
}