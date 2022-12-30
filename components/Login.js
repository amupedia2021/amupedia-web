import styles from '@styles/scss/login.module.scss';
import logo from '@images/login/amupediaLoginLogo.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome/index';
import {
  faEye,
  faUser,
  faLock,
  faEyeSlash,
} from 'node_modules/@fortawesome/free-solid-svg-icons/index';
import { useContext, useState } from 'react';
import { Store } from 'utils/Store/Store';

function Login() {
  const { state, dispatch } = useContext(Store);
  const { closingLogin, showLogin } = state;

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [type, setType] = useState('password');

  const inputChange = (e) => {
    console.log(credentials);
    if (e.target.name === 'email') {
      setCredentials({ email: e.target.value, password: credentials.password });
    } else if (e.target.name === 'password') {
      setCredentials({
        email: credentials.email,
        password: e.target.value,
      });
    }
  };

  const changeType = () => {
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const closeLoginPanel = () => {
    dispatch({ type: { task: 'closingLogin', closingLogin: true } });
    setTimeout(() => {
      dispatch({ type: { task: 'loginPanel', showLogin: false } });
      dispatch({ type: { task: 'closingLogin', closingLogin: false } });
    }, 250);
  };

  return (
    showLogin && (
      <main className={`${styles.main} ${closingLogin && styles.closingPanel}`}>
        <div className={styles.overlay} onClick={closeLoginPanel} />
        <div className={`${styles.container}`}>
          <div className={styles.logo}>
            <Image src={logo} alt="Amupedia Logo" />
          </div>
          <div id="googleSignIn" className={styles.googleSignIn} />
          <p className={styles.or}>Or</p>
          <form className={styles.loginForm}>
            <label htmlFor="user">
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <input
                placeholder="Username"
                id="user"
                name="email"
                type="email"
                value={credentials.email}
                onChange={inputChange}
              />
            </label>
            <label htmlFor="pass">
              <FontAwesomeIcon icon={faLock} className={styles.icon} />
              <input
                id="pass"
                placeholder="Password"
                name="password"
                type={type}
                value={credentials.password}
                onChange={inputChange}
              />
              <FontAwesomeIcon
                icon={faEye}
                className={`${styles.eye} ${
                  type === 'password' && styles.active
                }`}
                onClick={changeType}
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className={`${styles.eye} ${type === 'text' && styles.active}`}
                onClick={changeType}
              />
              <span>Forgot Password ?</span>
            </label>
            <button>Sign In</button>
          </form>
        </div>
      </main>
    )
  );
}

export default Login;
