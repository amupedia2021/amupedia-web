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
					photo={'https://drive.google.com/open?id=1RWAmO7-EsB9GdmQY98bv1nOum3ZjhoDD'}
					desig={'Founder'}
				/>
								<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Abhishek Sharma'}
					photo={'https://drive.google.com/open?id=1mZX-hxB0SELryYm67bRAEHAIzkHunM87'}
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
					photo={'https://drive.google.com/open?id=16hq_9jnitCAJi7KwgQ0ZbZu9yM0n3eBt'}
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
					name={'Mohd Huzaifa'}
					photo={'https://drive.google.com/open?id=1dC-R3gjQlBY0fpBcvllON81evw6QCscP'}
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
					photo={'https://drive.google.com/open?id=1Lqd4NUWK-VIXiE6dwggEI8q4QR--9eyZ'}
					desig={'Content Writer'}
				/>
								<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Mohd Areeb Hasan Khan'}
					photo={'https://drive.google.com/open?id=1jI1CVdbEU_I4_LhYhIC1bKqlsPH6Th1Q'}
					desig={'Graphics Designer'}
				/>
												<Card
					facebook={'#'}
					insta={'#'}
					twitter={'#'}
					linkedin={'#'}
					name={'Faisal Ahmad '}
					photo={'https://drive.google.com/open?id=1KCQyKywheQL6ojlxfLP9tMT5ql6083Qj'}
					desig={'Graphics Designer'}
				/>
												<Card
					facebook={'#'}
					insta={'https://instagram.com/lostincaves?r=nametag'}
					twitter={'#'}
					linkedin={'#'}
					name={'Aakifah Aiman Sayyeda'}
					photo={'https://drive.google.com/open?id=1_VCKWtLTfFdpELXHgOnHXPVeXhrAEWFz'}
					desig={'Social Media Team head'}
				/>
												<Card
					facebook={'#'}
					insta={'https://instagram.com/laksh__gupta.__?igshid=YmMyMTA2M2Y='}
					twitter={'#'}
					linkedin={'https://www.linkedin.com/in/laksh-gupta-a35a66221'}
					name={'Laksh Gupta '}
					photo={'https://drive.google.com/open?id=1_VCKWtLTfFdpELXHgOnHXPVeXhrAEWFz'}
					desig={'Social media member'}
				/>
			</div>
		</>
	);
};

export default Team;
