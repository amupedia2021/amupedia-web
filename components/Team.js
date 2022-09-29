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
					github={'https://www.github.com/sayyedarib'}
					name={'Anmol Agrawal'}
					photo={''}
					desig={'Founder'}
				/>
								<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Abhishek Sharma'}
					photo={''}
					desig={'Co-Founder'}
				/>
																<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Muhaiyuddin Sabir'}
					photo={''}
					desig={'Search Engine Optimization Manager'}
				/>
				<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Hamid Husain'}
					photo={''}
					desig={'Web Devloper'}
				/>
				<Card
					facebook={'#'}
					insta={'https://www.instagram.com/?hl=en'}
					twitter={'#'}
					linkedin={'https://www.linkedin.com/in/sayyed-arib-hussain-1220b5187/'}
					name={'Sayyed Arib Hussain'}
					photo={''}
					desig={'Web Devloper'}
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
					name={'Mohd Huzaifa'}
					photo={''}
					desig={'Designation'}
				/>
								<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Abdul Saboor'}
					photo={''}
					desig={'Management Team member'}
				/>
								<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Muskan Azmi'}
					photo={''}
					desig={'Content Writer'}
				/>
								<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Mohd Areeb Hasan Khan'}
					photo={''}
					desig={'Graphics Designer'}
				/>
												<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Faisal Ahmad '}
					photo={''}
					desig={'Graphics Designer'}
				/>
												<Card
					facebook={'#'}
					insta={'https://instagram.com/lostincaves?r=nametag'}
					twitter={'#'}
					linkedin={'#'}
					name={'Aakifah Aiman Sayyeda'}
					photo={''}
					desig={'Social Media Team head'}
				/>
												<Card
					facebook={'#'}
					insta={'https://instagram.com/laksh__gupta.__?igshid=YmMyMTA2M2Y='}
					twitter={'#'}
					linkedin={'https://www.linkedin.com/in/laksh-gupta-a35a66221'}
					name={'Laksh Gupta '}
					photo={''}
					desig={'Social media member'}
				/>
			</div>
		</>
	);
};

export default Team;
