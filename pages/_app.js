import Navbar from "@comp/Navbar";
import "@styles/globals.css";
import Head from "node_modules/next/head";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
	return (
		<motion.div
			key={router.route}
			initial="pageInitial"
			animate="pageAnimate"
			variants={{
				pageInitial: {
					opacity: 0,
				},
				pageAnimate: {
					opacity: 1,
				},
			}}
		>
			<Head>
				<title>Amupedia</title>
				<meta
					name="description"
					content="Amupedia is an initiative to help college students pursuing B.Tech, B.E or B.Com, especially from AMU."
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</motion.div>
	);
}

export default MyApp;
