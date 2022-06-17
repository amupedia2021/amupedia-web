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
					desig={'Technology Lead'}
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
