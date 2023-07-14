import Head from "next/head";
import BlogCard from "components/Blogs/BlogCard";
import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import styles from "@styles/scss/blog.module.scss";
import blogData from "/data/blogdata";
import GoToTop from "components/GoToTop";
import WriteBlog from "./writeblog";
import { useState } from "react";
export default function Blogs() {
	const [query, setQuery] = useState("");
	const handleSearch = (e) => {
		setQuery(e.target.value)
	}
	return (
		<>
			<GoToTop />
			<Head>
				<title>Blogs | Amupedia</title>
				<meta name="description" content="Check out our blog posts." />
			</Head>
			<Header image="/images/blog/blog_bg.svg" text="Blogs" />
			{/* Search */}
			<div className={styles.searchbar}>
				<input className={styles.searchInput}
					type='text'
					placeholder='Search Blogs...'
					onChange={handleSearch}
				/>
				<button
					className={styles.searchBtn}
					onClick={handleSearch}>Search</button>
			</div>
			{/* <Link href="/blog/writeblog">Write a blog</Link> */}
			<div className={styles.container}>
				{blogData.filter(
					(blogItem) => blogItem.title
						.toLowerCase().includes(query.toLowerCase()))
					.map((blogItem) => (
						<BlogCard
							author={blogItem.author}
							title={blogItem.title}
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
