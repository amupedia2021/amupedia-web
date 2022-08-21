import styles from '@styles/scss/main.module.scss';
import Card from './Teamcard';

const Team = () => {
	return (
		<>
			<h2 className={styles.heading}>Our Team</h2>
			<div className={styles.team}>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Haider Ali'}
					photo={'/images/team/haider.jpg'}
					desig={'Co-Founder and Core Developer'}
				/>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'https://www.linkedin.com/in/sayyed-arib-hussain-1220b5187/'}
					github={'#'}
					name={'Aarib'}
					photo={''}
					desig={'Web Developer'}
				/>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Name Here'}
					photo={''}
					desig={'Designation'}
				/>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Name Here'}
					photo={''}
					desig={'Designation'}
				/>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Name Here'}
					photo={''}
					desig={'Designation'}
				/>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Name Here'}
					photo={''}
					desig={'Designation'}
				/>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Name Here'}
					photo={''}
					desig={'Designation'}
				/>
			</div>
		</>
	);
};

export default Team;
