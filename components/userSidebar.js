import styles from '@styles/scss/_writeblog.module.scss';

const Sidebar = () => {
	return (
		<div className={styles.userData}>
			<div className={styles.inputFields}>
				<input
					type="text"
					name="fullName"
					id="fullName"
					className={`${styles.data}`}
					placeholder="Full Name"
					required={true}
				/>
				<input
					type="email"
					name="email"
					id="fullName"
					className={`${styles.data}`}
					placeholder="E-mail"
					required={true}
				/>
				<input
					type="number"
					name="phone"
					id="fullName"
					placeholder="Phone"
					className={`${styles.data}`}
				/>
				<input
					type="text"
					name="link"
					id="fullName"
					className={`${styles.data}`}
					placeholder="GitHub (Optional)"
				/>
				<textarea
					name="summary"
					id="fullName"
					className={`${styles.summary} ${styles.data}`}
					rows={8}
					placeholder="Short Summary of your blog topic"
				></textarea>
			</div>
			<button type="submit" className={styles.submit}>
				Submit For Review
			</button>
		</div>
	);
};

export default Sidebar;
