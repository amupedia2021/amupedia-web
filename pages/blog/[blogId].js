import { useRouter } from "next/router";
import { useState ,useEffect} from "react";
import Image from "next/image";
import styles from "@styles/BlogDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faClock } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faPlayCircle } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faTwitter } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebook } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faLinkedin } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faLink } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faBookmark } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { faEllipsisH } from "node_modules/@fortawesome/free-solid-svg-icons/index";
import {faArrowLeft} from "node_modules/@fortawesome/free-solid-svg-icons/index";
import BlogCard from "components/Blogs/BlogCard";
import blogData from "/data/blogdata";
import Link from "next/link";
import Footer from "components/common/Footer";
import ReactMarkdown from "react-markdown";
import md from "markdown-it";
export default function BlogId() {
  const router = useRouter();
  const { blogId } = router.query;
  const[Blogid,SetBlogid]=useState(blogId);

  const blog = blogData.find(item => item.id === parseInt(Blogid))
  console.log(blog)
  console.log("heelo",blogId);
  
  return (
    <div className="w-screen">
    <div className={styles.blog}>
      <div className={styles.blogDetail}>
        <div className={styles.blogHeader}>
          <h2 className=" mb-5 leading-tight py-4 fixed top-0 z-30 w-screen bg-white shadow-xl font-semibold font-mono">{blog.title}</h2>
          <div className={styles.blogHeaderInfo}>
            <div className={styles.blogHeaderInfoLeft}>
              <ul>
                <li>
                  <a href="/blog" class="text-blue-700 hover:scale-110 hover:text-blue-900 transition duration-200">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span> Blogs</span>
                  </a>
                </li>
                <li className="-space-x-1">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <span>Test User</span>
                </li>
                <li className="-space-x-1">
                  <FontAwesomeIcon icon={faClock} />
                  <span>5 min read</span>
                </li>
                <li className="hover:scale-110 -space-x-1">
                  <FontAwesomeIcon icon={faPlayCircle} />
                  <span>Listen</span>
                </li>
              </ul>
            </div>
            <div className={styles.blogHeaderInfoRight}>
              <ul className={styles.socialIcons}>
                <li>
                  <Link href="#twitter">
                    <a href="#twitter">
                      <FontAwesomeIcon className="hover:text-blue-500 hover:scale-150 transition duration-200" icon={faTwitter}/>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#facebook">
                    <a href="#facebook">
                      <FontAwesomeIcon className="hover:text-blue-500 hover:scale-150 transition duration-200" icon={faFacebook} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#linkedin">
                    <a href="#linkedin">
                      <FontAwesomeIcon className="hover:text-blue-500 hover:scale-150 transition duration-200" icon={faLinkedin} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#blogLink">
                    <a href="#blogLink">
                      <FontAwesomeIcon className="hover:text-green-500 hover:scale-150 transition duration-200" icon={faLink} />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className={styles.bookmark_and_more_icon}>
                <FontAwesomeIcon className="hover:text-[#000] cursor-pointer hover:scale-150 transition duration-200" icon={faBookmark} />
                <FontAwesomeIcon className="hover:text-[#000] cursor-pointer hover:scale-150 transition duration-200" icon={faEllipsisH} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogPicture}>
          <img
            src={blog.image}
            width="100%"
            height="100%"
            className="inline object-fill w-full"
          />
        </div>
        <div className={styles.blogBody}>
            {blog.description} 
        </div>
      </div>
      <div className={styles.otherBlogsCard}>
        <h3 className="text-5xl font-serif font-bold underline capitalize tracking-wider">See other blogs</h3>
        <div className={styles.blogCards}>
          {blogData.map((blogItem) => (
            <BlogCard
              key={blogItem.id}
              id={blogItem.id}
              image={blogItem.image}
              comments={blogItem.comments}
              likes={blogItem.likes}
              class="hover:shadow-2xl hover:scale-150"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div></div>
  );
}

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}
