import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@styles/Navbar.module.css";
import { useState, useEffect } from "react";

export default () => {
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", changeNavbar);
	});

	const changeNavbar = () => {
		if (window.scrollY > 500) {
			setNavbar(true);
		} else setNavbar(false);
	};

	const router = useRouter();
	const onClick = () => {
		const menu = document.querySelector("#menu");
		if (menu.checked) menu.click();
	};

	return (
		<>
			{/* <!-- hamburger menu icon (for mobile phones) --> */}
			<input type="checkbox" className={styles.menu} id="menu" />
			<label htmlFor="menu" className={styles.ham} id="ham">
				<div className={`${styles.hamline} ${styles.hamline1}`}></div>
				<div className={`${styles.hamline} ${styles.hamline2}`}></div>
				<div className={`${styles.hamline} ${styles.hamline3}`}></div>
			</label>

			{/* <!-- overlay to be shown when nav bar becomes visible --> */}
			<div className={styles.blackoverlay} id="overlay" onClick={onClick}></div>

			{/* <!-- navigation bar --> */}
			<nav
				className={`${styles.navbar} ${navbar && styles.active}`}
				id="navbar"
			>
				<ul className={styles.list}>
					<li
						className={`${styles.listitem} ${
							router.pathname === "/" && router.asPath === "/" && navbar
								? styles.navList_active
								: ""
						}`}
					>
						<Link href="/">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/" && router.asPath === "/"
										? styles.active
										: ""
								} ${navbar && styles.nav_active}`}
							>
								Home
							</a>
						</Link>
					</li>
					<li
						className={`${styles.listitem} ${
							router.pathname === "/about" && navbar
								? styles.navList_active
								: ""
						}`}
					>
						<Link href="/about">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/about" ? styles.active : ""
								} ${navbar && styles.nav_active}`}
							>
								About
							</a>
						</Link>
					</li>
					<li
						className={`${styles.listitem} ${
							router.asPath === "/#courses" && navbar
								? styles.navList_active
								: ""
						}`}
					>
						<Link href="/#courses">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.asPath === "/#courses" ? styles.active : ""
								} ${navbar && styles.nav_active}`}
							>
								Courses
							</a>
						</Link>
					</li>
					<li
						className={`${styles.tem} ${styles.listitem} ${
							router.pathname === "/team" && navbar ? styles.navList_active : ""
						}`}
					>
						<Link href="/team">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/team" ? styles.active : ""
								} ${navbar && styles.nav_active}`}
							>
								Team
							</a>
						</Link>
					</li>
					<li
						className={`${styles.blg} ${styles.listitem} ${
							router.pathname === "/blog" && navbar ? styles.navList_active : ""
						}`}
					>
						<Link href="/blog">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/blog" ? styles.active : ""
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
