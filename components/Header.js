import styles from "@styles/Header.module.css";
import Wave from "./Wave";
import { motion } from "framer-motion";

export default (props) => {
	const { image, text } = props;
	return (
		<>
			<div
				style={{
					height: "500px",
				}}
				id="header"
			>
				{/* <!-- background on top --> */}
				<div
					className={styles.headerbg}
					style={{
						background: `url(${image}) no-repeat center center/cover`,
					}}
				></div>

				<motion.div
					className={styles.center_text}
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
						},
					}}
				>
					<p>{text}</p>
					{text === "Amupedia" && (
						<p className={styles.subline}>Achieving excellence together</p>
					)}
				</motion.div>
				<Wave />
			</div>
		</>
	);
};
