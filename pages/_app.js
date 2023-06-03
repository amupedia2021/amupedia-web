import Navbar from "@comp/common/Navbar";
import jwt from "jsonwebtoken";
import "@styles/globals.css";
import Head from "node_modules/next/head";
// import { useEffect } from 'react';
import "../styles/tailwind.css" //importing Tailwind CSS utilities
import { motion } from "framer-motion";
import { StoreProvider } from "utils/Store/Store";
import Alert from "components/common/Alert";
import Script from "node_modules/next/script";
// import Login from 'components/Login';

function addProductJsonLd() {
  return {
    __html: `{
				"@context": "https://schema.org/", 
				"@type": "BreadcrumbList", 
				"itemListElement": [{
					"@type": "ListItem", 
					"position": 1, 
					"name": "Home",
					"item": "https://www.amupedia.com"  
				},{
					"@type": "ListItem", 
					"position": 2, 
					"name": "About",
					"item": "https://www.amupedia.com/about"  
				},{
					"@type": "ListItem", 
					"position": 3, 
					"name": "Blogs",
					"item": "https://www.amupedia.com/blog"  
				}]
			}`,
  };
}

function MyApp({ Component, pageProps, router }) {
  // function handleCallbackResponse(response) {
  // 	const token = response.credential;
  // // got all the info from the user
  // 	console.log(`Token : ${token}`);
  // 	const user = jwt.decode(token);
  // 	console.log(user);
  // }

  // useEffect(() => {
  // 	/*global google */
  // 	// console.log(google);
  // 	try {
  // 		window.onload = () => {
  // 			google.accounts.id.initialize({
  // 				client_id:
  // 					'647067039859-t83enorpm9oglinm1rja79ls29ts0kvo.apps.googleusercontent.com',
  // 				// callback function is called when someone logs in
  // 				callback: handleCallbackResponse,
  // 			});

  // 			google.accounts.id.renderButton(
  // 				document.getElementById('googleSignIn'),
  // 				{
  // 					theme: 'outline',
  // 					size: 'large',
  // 				}
  // 			);

  // 			google.accounts.id.prompt();
  // 		};
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // }, []);

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
          {/* <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6172950963478417"
            crossOrigin="anonymous"
          ></script> */}

          <title>Amupedia</title>
          <meta
            name="description"
            content="Amupedia is an initiative to help college students pursuing B.Tech, B.E or B.Com, especially from AMU."
          />
          <meta name="keywords" content="B.Tech, B.Com, B.E" />
          <meta
            property="og:image"
            content="https://www.amupedia.com/og-image.webp"
          />
          <meta property="og:image:width" content="150" />
          <meta property="og:image:height" content="150" />
          <meta property="og:title" content="Amupedia" />
          <meta
            property="og:description"
            content="Amupedia is an initiative to help college students pursuing B.Tech, B.E or B.Com, especially from AMU."
          />
          <meta name="twitter:card" content="summary" />
          <meta property="og:url" content="https://www.amupedia.com" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addProductJsonLd()}
            key="product-jsonld"
          />
        </Head>
        <section styles={{ position: "relative" }}>
          
          <Component {...pageProps}></Component>
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6172950963478417"
            crossOrigin="anonymous"
          ></Script>
          <Script
            src="https://accounts.google.com/gsi/client"
            async
            defer
          ></Script>
        </section>
      </motion.div>
    </StoreProvider>
  );
}

export default MyApp;
