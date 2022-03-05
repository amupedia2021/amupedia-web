import styles from "@styles/Wave.module.css";

export default () => {
	return (
		<div className={styles.wavediv}>
			<svg
				className={styles.waves}
				xmlns="http://www.w3.org/2000/svg"
				xlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28"
				preserveAspectRatio="none"
				shapeRendering="auto"
			>
				<defs>
					<path
						id="gentle-wave"
						d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
					/>
				</defs>
				<g className={styles.parallax}>
					<use
						className={styles.Use}
						href="#gentle-wave"
						x="48"
						y="0"
						fill="rgba(255,255,255,0.7"
					/>
					<use
						className={styles.Use}
						href="#gentle-wave"
						x="48"
						y="3"
						fill="rgba(255,255,255,0.5)"
					/>
					<use
						className={styles.Use}
						href="#gentle-wave"
						x="48"
						y="5"
						fill="rgba(255,255,255,0.3)"
					/>
					<use
						className={styles.Use}
						href="#gentle-wave"
						x="48"
						y="7"
						fill="#fff"
					/>
				</g>
			</svg>
		</div>
	);
};
