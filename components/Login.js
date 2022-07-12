import styles from '@styles/scss/login.module.scss';
import logo from '@images/login/logo-amupedia.svg';
import Image from 'next/image';
import { faEye } from 'node_modules/@fortawesome/free-solid-svg-icons/index';
import { faEyeSlash } from 'node_modules/@fortawesome/free-solid-svg-icons/index';
import { useState } from 'react';

const Login = () => {
	const [credentials, setCredentials] = useState({ email: '', password: '' });
	const [type, setType] = useState('password');

	const inputChange = (e) => {
		console.log(`${e.target.name} : ${e.target.value}`);
		if (e.target.name === 'email') {
			setCredentials({ email: e.target.value, password: credentials.password });
		} else if (e.target.name === 'password') {
			setCredentials({
				email: credentials.email,
				password: e.target.value,
			});
		}
	};

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image src={logo} alt="Amupedia Logo"></Image>
				</div>
				<div id="googleSignIn" className={styles.googleSignIn}></div>
				<p className={styles.or}>Or</p>
				<form className={styles.loginForm}>
					<input
						placeholder="Username"
						name="email"
						type="email"
						value={credentials.email}
						onChange={inputChange}
					/>
					<label htmlFor="pass">
						<input
							id="pass"
							placeholder="Password"
							name="password"
							type={type}
							value={credentials.password}
							onChange={inputChange}
						/>
						<span>Forgot Password ?</span>
					</label>
					<button>Sign In</button>
				</form>
			</div>
		</main>
	);
};

export default Login;
