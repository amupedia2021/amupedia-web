import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/Navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'node_modules/next/image';

const Navbar = () => {
  const checkboxRef = useRef();
  const [labelText, setLabelText] = useState('&#9776');
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [courseActive, setCourseActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [dropdown, setDropdown] = useState(false); //for adding dropdown feature

  useEffect(() => {
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
    window.addEventListener('scroll', changeNavbar);

    const contacts = document.getElementById('contacts');
    if (!contacts) return;
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
    obs.observe(contacts);
  }, []);

  // const changeNavbar = () => {
  //   if (window.scrollY > 500) {
  //     setNavbar(true);
  //   } else setNavbar(false);
  // };
  const changeNavbar = () => {
    const courses = document.getElementById('courses');
    if (courses) {
      if (window.scrollY > 500) {
        setNavbar(true);
        setCourseActive(true);
      } else {
        setNavbar(false);
        setCourseActive(false);
      }
    } else {
      setNavbar(window.scrollY > 500);
    }
  };

  const handleCoursesHover = () => {
    if (window.innerWidth >= 768) {
      // Show the dropdown menu only on larger screens
      setDropdown(true);
    }
  };

  const handleCoursesClick = () => {
    if (window.innerWidth < 768) {
      // Show/hide the dropdown menu on small screens
      setDropdown(!dropdown);
    }
  };
  const hidebodyOverflow = (e) => {
    if (checkboxRef.current.checked === false) setLabelText('&#9776;');
    else setLabelText('&times;');
  };

  return (
    <>
      {/* <!-- hamburger menu icon (for mobile phones) --> */}
      <input
        type='checkbox'
        className={`${styles.menu} ${dropdown ? styles.overlay_active : ''} `}
        id='menu'
        onClick={hidebodyOverflow}
        ref={checkboxRef}
      />
      <label
        htmlFor='menu'
        className={`${styles.hams} ${dropdown ? styles.overlay_active : ''} `}
        style={!dropdown ? { top: 10, fontSize: 50, color: 'black' } : null}
        id='ham'
        dangerouslySetInnerHTML={{ __html: labelText }}
      ></label>

      {/* <!-- overlay to be shown when nav bar becomes visible --> */}
      {/* <div className={styles.blackoverlay} id='overlay' ></div> */}
      <div
        className={`${styles.blackoverlay} ${
          dropdown ? styles.overlay_active : ''
        }`}
        id='overlay'

        onClick={() => {
          const menu = document.querySelector('#menu');
          if (menu.checked) menu.click();
          setDropdown(false);
        }}

      ></div>

      {/* <!-- navigation bar --> */}
      <nav
        className={`${styles.navbar} ${navbar && styles.active}`}
        id='navbar'
      >
        {/* {TODO: !Logo to be completed } */}
        {/* <div className={styles.logo}>
					<Image loading="lazy" src={logo} alt="Logo"></Image>
				</div> */}
        <Link href='/'>
          <a
            // onClick={onClick}: replace this with below to ensure that the menu is properly closed when the element is clicked.
            onClick={() => {
              const menu = document.querySelector('#menu');

              if (menu.checked){    setLabelText("&#9776;"); menu.click();}

            }}
            className={`${styles.lnk} ${router.pathname === '/' && !courseActive && !contactActive ? styles.active : ''
              } ${navbar && styles.nav_active}`}
          >
            <div className={styles.imageContainer} >
              <Image
                src="/logomain2.png"
                alt="Logo"
                width={60}
                height={60}
                className={styles.logoImage}
              />
            </div>
          </a>
        </Link>
        <ul className={styles.list}>
          <li
            className={`${styles.listitem} ${
              router.pathname === '/' &&
              !courseActive &&
              !contactActive &&
              navbar
                ? styles.navList_active
                : ''
            }`}
          >
            <Link href='/'>
              <a
                // onClick={onClick}: replace this with below to ensure that the menu is properly closed when the element is clicked.
                onClick={() => {
                  const menu = document.querySelector('#menu');

                  if (menu.checked){    setLabelText("&#9776;"); menu.click();}
   
                }}
                className={`${styles.lnk} ${
                  router.pathname === '/' && !courseActive && !contactActive
                    ? styles.active
                    : ''
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
            onMouseEnter={handleCoursesHover} // Add mouse enter event for larger screens
            onClick={handleCoursesClick} // Add click event for smaller screens
          >
            <a
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  const courses = document.getElementById('courses');
                  if (courses) courses.scrollIntoView();
                  //onClick();
                }, 10);
              }}
              className={`${styles.lnk} ${courseActive ? styles.active : ''} ${
                navbar && styles.nav_active
              }`}
            >
              Courses
            </a>

            {/* Dropdown menu for courses */}
            {dropdown && (
              <ul
                className={styles.dropdownMenu}
                onMouseLeave={() => setDropdown(false)}
              >
                <li>
                  <Link href='/courses/btech'>
                    <a
                      onClick={() => setDropdown(false)}
                      className={styles.dropdownLink}
                    >
                      B.Tech
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a
                      onClick={() => setDropdown(false)}
                      className={styles.dropdownLink}
                    >
                      BE
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/courses/bcom'>
                    <a
                      onClick={() => setDropdown(false)}
                      className={styles.dropdownLink}
                    >
                      B.Com
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/courses/bsc'>
                    <a
                      onClick={() => setDropdown(false)}
                      className={styles.dropdownLink}
                    >
                      BSC
                    </a>
                  </Link>
                </li>

                {/* Add more courses as needed */}
              </ul>
            )}
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
                onClick={() => {
                  const menu = document.querySelector('#menu');
                  if (menu.checked) {
                    setLabelText('&#9776;');
                    menu.click();
                  }
                }}
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
                onClick={() => {
                  const menu = document.querySelector('#menu');
                  if (menu.checked) {
                    setLabelText('&#9776;');
                    menu.click();
                  }
                }}
                className={`${styles.lnk} ${
                  router.pathname === '/blog' ? styles.active : ''
                } ${navbar && styles.nav_active}`}
              >
                Blogs
              </a>
            </Link>
          </li>

          <li
            className={`${styles.listitem} ${
              router.pathname === '/contributors' && navbar
                ? styles.navList_active
                : ''
            }`}
          >
            <Link href='/contributors'>
              <a
                onClick={() => {
                  const menu = document.querySelector('#menu');
                  if (menu.checked) {
                    setLabelText('&#9776;');
                    menu.click();
                  }
                }}
                className={`${styles.lnk} ${
                  router.pathname === '/contributors' ? styles.active : ''
                } ${navbar && styles.nav_active}`}
              >
                Contributors
              </a>
            </Link>
          </li>
          <li
            className={`${styles.listitem} ${
              contactActive && navbar ? styles.navList_active : ''
            }`}
          >
            <a
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  const contacts = document.getElementById('contactus');
                  if (contacts) contacts.scrollIntoView();
                  //onClick();
                }, 10);
              }}
              className={`${styles.lnk} ${contactActive ? styles.active : ''} ${
                navbar && styles.nav_active
              }`}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
