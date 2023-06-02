import styles from '@styles/Footer.module.css';
import {
  BsInstagram,
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsTwitter
} from 'react-icons/bs';
import Link from 'next/link';
import Wave from './Wave';
// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div id={styles.above_bg}>
//         <p>Follow Us On</p>
//         <div id={styles.icons}>
//           <a
//             href="https://www.instagram.com/amu.pedia/?hl=am-et"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faInstagramSquare}
//               size="2x"
//               inverse
//               className={styles.icon}
//             />
//           </a>
//           <a
//             href="https://www.facebook.com/AMUPedia"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faFacebookSquare}
//               size="2x"
//               inverse
//               className={styles.icon}
//             />
//           </a>
//           <a
//             href="https://twitter.com/AmuPedia?t=PEHmP10PAymk6gsTykKtAQ&s=08"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faTwitterSquare}
//               size="2x"
//               inverse
//               className={styles.icon}
//             />
//           </a>
//           <a
//             href="https://in.linkedin.com/company/amupedia"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               size="2x"
//               inverse
//               className={styles.icon}
//             />
//           </a>
//         </div>
//       </div>
//       <div id={styles.above_ftbg}>
//        <p><a href="https://github.com/amupedia2021/Project-Amupedia">
//             Contribute to the project
//             <FontAwesomeIcon
//               icon={faGithub}
//               size="1x"
//               inverse
//               className={styles.icon}
//             />
//             </a>
//             </p>
//             </div>
//       <div id={styles.ftbg}>
//         <p>Copyright2021@amupedia.com</p>
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  return (
    <div id={styles.bg_color}>
      <div id={styles.above_bg}>
        <div>
          <h2>Amupedia</h2>
          <p id={styles.above_bg_h2_p}>Achieving Excellence Together</p>
        </div>

        <div id={styles.icons}>
          <a
            href='https://www.instagram.com/amu.pedia/?hl=am-et'
            target='_blank'
            rel='noreferrer'
          >
            <BsInstagram size={30} className={styles.icon} />
          </a>

          <a
            href='https://www.facebook.com/AMUPedia'
            target='_blank'
            rel='noreferrer'
          >
            <BsFacebook size={30} className={styles.icon} />
          </a>

          <a
            href='https://in.linkedin.com/company/amupedia'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin size={30} className={styles.icon} />
          </a>

          <a
            href='https://twitter.com/AmuPedia?t=PEHmP10PAymk6gsTykKtAQ&s=08'
            target='_blank'
            rel='noreferrer'
          >
            <BsTwitter size={30} className={styles.icon} />
          </a>
        </div>
      </div>

      <div id={styles.footer_links}>
        <div>
          <div id={styles.footer_links_title}>
            <Link href='/'> Home</Link>
          </div>
          <div id={styles.footer_links_subtitle}>
            <p>Our Mission</p>
            <p>Our Services</p>
            <p>Notes</p>
            <p>Updates</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div>
          <div id={styles.footer_links_title}>
            <Link href='/'> Courses</Link>
          </div>
          <div id={styles.footer_links_subtitle}>
            <p>B.Tech</p>
            <p>B.E</p>
            <p>B.Com</p>
            <p>B.sc</p>
          </div>
        </div>

        <div>
          <div id={styles.footer_links_title}>
            <Link href='/about'> About</Link>
          </div>

          <div id={styles.footer_links_subtitle}>
            <p>Amupedia</p>
            <p>Team</p>
            <p>Story</p>
          </div>
        </div>

        <div id={styles.footer_links_title}>
          <Link href='/blogs'> Blogs</Link>
        </div>
      </div>

      <div id={styles.footer_line}></div>

      <div id={styles.above_ftbg_}>
        <div id={styles.contribute}>
          <p>Contribute to the project</p>

          <a id={styles.github_icon} href='https://github.com/amupedia2021/Project-Amupedia'>
            <BsGithub size={20} />
          </a>
        </div>

        <div>
          <p>Made with ❤️ and Amupedia Team</p>
        </div>

        <div>
          <p>Copyright2023@amupedia.com</p>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Footer;
