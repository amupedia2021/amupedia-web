import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import Taskbar from './Taskbar';
import styles from '@styles/scss/subject.module.scss';

const Subject = ({ data }) => {
	const [section, setSection] = useState('notes');

	return (
		<div>
			<Header image={data.bgImg} text={data.name} />
			<div className={styles.main}>
				<Taskbar section={section} setSection={setSection} />
			</div>
			<Footer />
		</div>
	);
};

export default Subject;
