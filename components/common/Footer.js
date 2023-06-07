
import styles from '@styles/Footer.module.css';
import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome/index';
import {
  faGithub,
  faInstagramSquare
} from 'node_modules/@fortawesome/free-brands-svg-icons/index';
import { faFacebookSquare } from 'node_modules/@fortawesome/free-brands-svg-icons/index';
import { faTwitterSquare } from 'node_modules/@fortawesome/free-brands-svg-icons/index';
import { faLinkedin } from 'node_modules/@fortawesome/free-brands-svg-icons/index';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id='footer'>
      <div id={styles.above_bg}>
        <p>Follow Us On</p>
        <div id={styles.icons}>
          <a
            href='https://www.instagram.com/amu.pedia/?hl=am-et'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit us on Instagram'
          >
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size='2x'
              inverse
              className={styles.icon}
            />
          </a>
          <a
            href='https://www.facebook.com/AMUPedia'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit us on Facebook'
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size='2x'
              inverse
              className={styles.icon}
            />
          </a>
          <a
            href='https://twitter.com/AmuPedia?t=PEHmP10PAymk6gsTykKtAQ&s=08'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit us on Twitter'
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size='2x'
              inverse
              className={styles.icon}
            />
          </a>
          <a
            href='https://in.linkedin.com/company/amupedia'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit us on Linkedin'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size='2x'
              inverse
              className={styles.icon}
            />
          </a>
        </div>
      </div>
      <div id={styles.above_ftbg}>
        <p>
          <a
            href='https://github.com/amupedia2021/Project-Amupedia'
            aria-label='Visit us on Github'
          >
            Contribute to the project
            <FontAwesomeIcon
              icon={faGithub}
              size='1x'
              inverse
              className={styles.icon}
            />
          </a>
        </p>
      </div>
      <div id={styles.ftbg}>
        <p>&copy; {year} Amupedia.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
