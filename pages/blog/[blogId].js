import { useRouter } from "next/router";
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
import BlogCard from "components/Blogs/BlogCard";
import blogData from "/data/blogdata";
import Link from "next/link";

export default function BlogId() {
  const router = useRouter();
  const { blogId } = router.query;
  return (
    <div className={styles.blog}>
      <div className={styles.blogDetail}>
        <div className={styles.blogHeader}>
          <h2>Blog Title</h2>
          <div className={styles.blogHeaderInfo}>
            <div className={styles.blogHeaderInfoLeft}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUserCircle} />
                  <span>Test User</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} />
                  <span>5 min read</span>
                </li>
                <li>
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
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#facebook">
                    <a href="#facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#linkedin">
                    <a href="#linkedin">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#blogLink">
                    <a href="#blogLink">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className={styles.bookmark_and_more_icon}>
                <FontAwesomeIcon icon={faBookmark} />
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogPicture}>
          <Image
            src="/images/blog/blogDetails/photo1.avif"
            alt="blogDetailPicture"
            layout="responsive"
            width="1500"
            height="800"
          />
        </div>
        <div className={styles.blogBody}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            laudantium harum optio ipsum eligendi corporis maxime facilis in
            adipisci. Molestias tempora sapiente voluptas. Laboriosam doloribus
            aliquid dicta quibusdam hic praesentium vitae ducimus aut.
            Blanditiis quasi consequuntur quidem optio earum dicta? Vel, nulla.
            Minus, cum cupiditate facere voluptas maxime exercitationem quia
            quidem illo perferendis aut nisi, quasi repudiandae velit vero
            ducimus! Velit non sapiente libero vitae dicta delectus? Eveniet
            assumenda officiis numquam soluta quisquam tempore a. Nesciunt saepe
            incidunt nostrum, maxime ex blanditiis harum reiciendis dignissimos
            reprehenderit, labore sed numquam accusamus exercitationem
            repellendus, soluta eum optio! Numquam adipisci mollitia soluta
            nesciunt eaque tenetur magni, saepe id voluptatem nam eveniet.
            Maiores beatae velit in voluptatibus quae dicta dolorum et eaque
            blanditiis laborum? Harum, debitis repellat architecto laudantium
            animi vero amet! Tempore, inventore earum quaerat sunt temporibus
            magnam molestiae accusantium omnis, at rem est iusto culpa dolorem
            sint delectus? Sed animi repudiandae veritatis!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            laudantium harum optio ipsum eligendi corporis maxime facilis in
            adipisci. Molestias tempora sapiente voluptas. Laboriosam doloribus
            aliquid dicta quibusdam hic praesentium vitae ducimus aut.
            Blanditiis quasi consequuntur quidem optio earum dicta? Vel, nulla.
            Minus, cum cupiditate facere voluptas maxime exercitationem quia
            quidem illo perferendis aut nisi, quasi repudiandae velit vero
            ducimus! Velit non sapiente libero vitae dicta delectus? Eveniet
            assumenda officiis numquam soluta quisquam tempore a. Nesciunt saepe
            incidunt nostrum, maxime ex blanditiis harum reiciendis dignissimos
            reprehenderit, labore sed numquam accusamus exercitationem
            repellendus, soluta eum optio! Numquam adipisci mollitia soluta
            nesciunt eaque tenetur magni, saepe id voluptatem nam eveniet.
            Maiores beatae velit in voluptatibus quae dicta dolorum et eaque
            blanditiis laborum? Harum, debitis repellat architecto laudantium
            animi vero amet! Tempore, inventore earum quaerat sunt temporibus
            magnam molestiae accusantium omnis, at rem est iusto culpa dolorem
            sint delectus? Sed animi repudiandae veritatis!
          </p>
          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus minus quo sed officia quod veritatis tempore molestiae
            ab accusantium tempora necessitatibus eligendi saepe est, fugiat qui
            sequi excepturi aspernatur nulla natus rerum quisquam officiis
            porro! Quas tempora corrupti provident voluptas ut at amet magni
            quia, totam quam id voluptate, omnis ipsum nesciunt vel similique
            dicta eum! Ab molestiae modi vero consectetur ratione perspiciatis
            ipsum, impedit iste at! Nostrum nisi eum illum sed perferendis
            distinctio quis reprehenderit iusto, expedita animi alias labore,
            dicta mollitia molestiae hic totam excepturi sequi? Quod, aperiam
            delectus, quos quasi officiis quas eaque suscipit minima enim quam
            tempore beatae aut numquam! Architecto reprehenderit rerum hic
            voluptatem non ullam et deserunt ducimus, praesentium, voluptatibus
            quod quae eos laborum accusantium veritatis dicta ex, quasi maiores?
            Unde, necessitatibus debitis quos culpa porro velit, iure aut
            dolores repudiandae veniam cupiditate. Non repudiandae quidem
            soluta? Aspernatur quo ab corporis dicta natus facere!
          </p>
        </div>
      </div>
      <div className={styles.otherBlogsCard}>
        <h3>See other blog</h3>
        <div className={styles.blogCards}>
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
      </div>
    </div>
  );
}
