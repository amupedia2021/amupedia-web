import styles from "@styles/scss/main.module.scss";
import { FontAwesomeIcon } from "node_modules/@fortawesome/react-fontawesome/index";
import { faInstagramSquare } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faFacebookSquare } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faTwitterSquare } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import { faLinkedin } from "node_modules/@fortawesome/free-brands-svg-icons/index";
import Tilt from "react-vanilla-tilt";

export default ({ facebook, insta, twitter, linkedin, name, photo, desig }) => {
	return (
		<>
			<Tilt className={styles.tilt}>
				<div
					className={styles.card}
					style={{
						background: `url(${photo}) no-repeat center center/cover`,
					}}
				>
					<div className={styles.card__space}></div>
					<div className={styles.card__info}>
						<p className={styles.card__info_name}>{name}</p>
						<p className={styles.card__info_desg}>{desig}</p>
						<div id={styles.card__info_icons}>
							<a href={insta} target="_blank" rel="noreferrer">
								<FontAwesomeIcon
									icon={faInstagramSquare}
									size="2x"
									inverse
									className={styles.icon}
								/>
							</a>
							<a href={facebook} target="_blank" rel="noreferrer">
								<FontAwesomeIcon
									icon={faFacebookSquare}
									size="2x"
									inverse
									className={styles.icon}
								/>
							</a>
							<a href={twitter} target="_blank" rel="noreferrer">
								<FontAwesomeIcon
									icon={faTwitterSquare}
									size="2x"
									inverse
									className={styles.icon}
								/>
							</a>
							<a href={linkedin} target="_blank" rel="noreferrer">
								<FontAwesomeIcon
									icon={faLinkedin}
									size="2x"
									inverse
									className={styles.icon}
								/>
							</a>
						</div>
					</div>
				</div>
			</Tilt>
		</>
	);
};
