import Navbar from '@comp/Navbar';
import jwt from 'jsonwebtoken';
import '@styles/globals.css';
import Head from 'node_modules/next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { StoreProvider } from 'utils/Store/Store';
import Alert from 'components/Alert';
import Login from 'components/Login';

function MyApp({ Component, pageProps, router }) {
	function handleCallbackResponse(response) {
		const token = response.credential;
		// got all the info from the user
		console.log(`Token : ${token}`);
		const user = jwt.decode(token);
		console.log(user);
	}

	useEffect(() => {
		/*global google */
		// console.log(google);
		try {
			window.onload = () => {
				google.accounts.id.initialize({
					client_id:
						'647067039859-t83enorpm9oglinm1rja79ls29ts0kvo.apps.googleusercontent.com',
					// callback function is called when someone logs in
					callback: handleCallbackResponse,
				});

				google.accounts.id.renderButton(
					document.getElementById('googleSignIn'),
					{
						theme: 'outline',
						size: 'large',
					}
				);

				google.accounts.id.prompt();
			};
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<StoreProvider>
			{/* <div id="signInDiv"></div> */}
			<Alert />
			{/* <Login /> */}
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
					<script
						src="https://accounts.google.com/gsi/client"
						async
						defer
					></script>
					<title>Amupedia</title>
					<meta
						name="description"
						content="Amupedia is an initiative to help college students pursuing B.Tech, B.E or B.Com, especially from AMU."
					/>
				</Head>
				<Navbar />
				<Component {...pageProps} />
			</motion.div>
		</StoreProvider>
	);
}

export default MyApp;
