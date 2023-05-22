
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@styles/Navbar.module.css";
import { useState, useEffect } from "react";
// import { entries } from "lodash";


import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/Navbar.module.css';
import { useState, useEffect } from 'react';


const Navbar = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [courseActive, setCourseActive] = useState(false);
  const [contactActive,setContactActive]=useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    // window.addEventListener("scroll",changeNavbar);
    const contact=document.getElementById("contact");
    const courses = document.getElementById("courses");
    if (!courses || !contact) return;

    window.addEventListener('scroll', changeNavbar);

    const courses = document.getElementById('courses');
    if (!courses) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCourseActive(true);
        } else {
          setCourseActive(false);
        }
      },
      { threshold: 0.8 }
    );

    obs.observe(courses);
  }, []);




  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    // window.addEventListener("scroll",changeNavbar);
    const contact=document.getElementById("contact");
    // const courses = document.getElementById("courses");
    if (!contact) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setContactActive(true);
        } else {
          setContactActive(false);
        }
      },
      { threshold: 0.8 }
    );

    obs.observe(contact);
  }, []);



  const changeNavbar = () => {
    if (window.scrollY > 500) {
      setNavbar(true);
    } else setNavbar(false);
  };

  const onClick = () => {
    // Handles mobile course click
    const menu = document.querySelector('#menu');
    if (menu.checked) menu.click();
  };

  return (
    <>
      {/* <!-- hamburger menu icon (for mobile phones) --> */}
      <input type='checkbox' className={styles.menu} id='menu' />
      <label htmlFor='menu' className={styles.ham} id='ham'>
        <div className={`${styles.hamline} ${styles.hamline1}`}></div>
        <div className={`${styles.hamline} ${styles.hamline2}`}></div>
        <div className={`${styles.hamline} ${styles.hamline3}`}></div>
      </label>

      {/* <!-- overlay to be shown when nav bar becomes visible --> */}
      <div className={styles.blackoverlay} id='overlay' onClick={onClick}></div>

      {/* <!-- navigation bar --> */}
      <nav
        className={`${styles.navbar} ${navbar && styles.active}`}
        id='navbar'
      >
        {/* {TODO: !Logo to be completed } */}
        {/* <div className={styles.logo}>
					// <Image src={logo} alt="Logo"></Image>
				</div> */}
        <ul className={styles.list}>
          <li
            className={`${styles.listitem} ${

              router.pathname === "/" && !courseActive && !contactActive && navbar

              router.pathname === '/' && !courseActive && navbar

                ? styles.navList_active
                : ''
            }`}
          >
            <Link href='/'>
              <a
                onClick={onClick}
                className={`${styles.lnk} ${

                  router.pathname === "/" && !courseActive && !contactActive ? styles.active : ""

                  router.pathname === '/' && !courseActive ? styles.active : ''

                } ${navbar && styles.nav_active}`}
              >
                Home
              </a>
            </Link>
          </li>
         
          <li
            className={`${styles.listitem} ${
              courseActive && navbar ? styles.navList_active : ''
            }`}
          >
            <span>
              <a
                onClick={() => {
                  router.push('/');
                  setTimeout(() => {
                    const courses = document.getElementById('courses');
                    if (courses) courses.scrollIntoView();

                    onClick();
                  }, 10);
                }}
                className={`${styles.lnk} ${
                  courseActive ? styles.active : ''
                } ${navbar && styles.nav_active}`}
              >
                Courses
              </a>
            </span>
          </li>

          <li
            className={`${styles.listitem} ${
              contactActive && navbar ? styles.navList_active : ""
            }`}
          >
            <span>
              <a
                onClick={() => {
                  router.push("/");
                  setTimeout(() => {
                    const contact = document.getElementById("contact");
                    if (contact) contact.scrollIntoView();

                    onClick();
                  }, 10);
                }}
                className={`${styles.lnk} ${
                  contactActive ? styles.active : ""
                } ${navbar && styles.nav_active}`}
              >
                Contact Us
              </a>
            </span>
          </li>
         

          <li
            className={`${styles.listitem} ${
              router.pathname === '/about' && navbar
                ? styles.navList_active
                : ''
            }`}
          >
            <Link href='/about'>
              <a
                onClick={onClick}
                className={`${styles.lnk} ${
                  router.pathname === '/about' ? styles.active : ''
                } ${navbar && styles.nav_active}`}
              >
                About
              </a>
            </Link>
          </li>

          {/* <li
						className={`${styles.tem} ${styles.listitem} ${
							router.pathname === '/team' && navbar ? styles.navList_active : ''
						}`}
					>
						<Link href="/team">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === '/team' ? styles.active : ''
								} ${navbar && styles.nav_active}`}
							>
								Team
							</a>
						</Link>
					</li> */}

          <li
            className={`${styles.blg} ${styles.listitem} ${
              router.pathname === '/blog' && navbar ? styles.navList_active : ''
            }`}
          >
            <Link href='/blog'>
              <a
                onClick={onClick}
                className={`${styles.lnk} ${
                  router.pathname === '/blog' ? styles.active : ''
                } ${navbar && styles.nav_active}`}
              >
                Blogs
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
