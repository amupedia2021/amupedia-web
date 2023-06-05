import Head from "next/head";
import BlogCard from "components/Blogs/BlogCard";
import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import styles from "@styles/scss/blog.module.scss";
import blogData from "/data/blogdata";
import GoToTop from "components/GoToTop";

export default function Blogs() {
	return (
		<>
			<GoToTop />
			<Head>
				<title>Blogs | Amupedia</title>
				<meta name="description" content="Check out our blog posts." />
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
