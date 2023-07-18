import styles from "@styles/scss/login.module.scss";
import logo from "@images/login/amupediaLoginLogo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "node_modules/@fortawesome/react-fontawesome/index";
import {
  faEye,
  faUser,
  faLock,
  faEyeSlash,
} from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { useContext, useState } from "react";
import { Store } from "utils/Store/Store";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { state, dispatch } = useContext(Store);
  const { closingLogin, showLogin } = state;

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [type, setType] = useState("password");

  const inputChange = (e) => {
    console.log(credentials);
    if (e.target.name === "email") {
      setCredentials({ email: e.target.value, password: credentials.password });
    } else if (e.target.name === "password") {
      setCredentials({
        email: credentials.email,
        password: e.target.value,
      });
    }
  };

  const changeType = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const closeLoginPanel = () => {
    dispatch({ type: { task: "closingLogin", closingLogin: true } });
    setTimeout(() => {
      dispatch({ type: { task: "loginPanel", showLogin: false } });
      dispatch({ type: { task: "closingLogin", closingLogin: false } });
    }, 250);
  };

  //new features added 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation here
    if (credentials.email.trim() === '') {
      toast.error('Please enter a valid email.');
      return;
    }

    if (credentials.password.trim() === '') {
      toast.error('Please enter a valid password.');
      return;
    }

    try {
      // Send login request to the server
      const response = await axios.post('/api/login', credentials);

      // Check the response from the server
      if (response.data.success) {
        // Login successful
        toast.success(response.data.message);
        // Redirect to the dashboard or perform any other necessary action
      } else {
        // Login failed
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };


  return (
    showLogin && (
      <main className={`${styles.main} ${closingLogin && styles.closingPanel}`}>
        <div className={styles.overlay} onClick={closeLoginPanel}></div>
        <div className={`${styles.container}`}>
          <div className={styles.logo}>
            <Image loading="lazy" src={logo} alt="Amupedia Logo"></Image>
          </div>
          <div id="googleSignIn" className={styles.googleSignIn}></div>
          <p className={styles.or}>Or</p>
          <form className={styles.loginForm} aria-label="Login form">
            <label htmlFor="user">
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <input
                placeholder="Username"
                id="user"
                name="email"
                type="email"
                value={credentials.email}
                onChange={inputChange}
                required
                aria-required="true"
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
                required
                aria-required="true"
              />
              <FontAwesomeIcon
                icon={faEye}
                className={`${styles.eye} ${
                  type === "password" && styles.active
                }`}
                onClick={changeType}
                aria-label={type==="password" && "Show Password"}
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className={`${styles.eye} ${type === "text" && styles.active}`}
                onClick={changeType}
                aria-label={type==="text" && "Hide Password"}
              />
              <span>Forgot Password ?</span>
            </label>
            <button>Sign In</button>
            <ToastContainer />
          </form>
        </div>
      </main>
    )
  );
};

export default Login;
