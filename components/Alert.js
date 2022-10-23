import { Store } from "utils/Store/Store";
import { useContext, useState } from "react";
import styles from "@styles/scss/alert.module.scss";
import {
  faExclamationCircle,
  faExclamationTriangle,
  faBell,
} from "node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "node_modules/@fortawesome/react-fontawesome/index";
import Link from "node_modules/next/link";

const Alert = () => {
  const { state, dispatch } = useContext(Store);
  const { alert } = state;
  const [toNull, setToNull] = useState(false);

  const alertUtil = {
    error: faExclamationCircle,
    warning: faExclamationTriangle,
    noti: faBell,
  };

  const alertOff = () => {
    setToNull(true);
    setTimeout(() => {
      dispatch({ type: { task: "setAlert", alert: null } });
      setToNull(false);
    }, 250);
  };

  return (
    <>
      {alert && (
        <div className={`${styles.main} ${toNull && styles.main_hide}`}>
          <div className={styles.body}>
            <div className={styles.content}>
              <span
                className={`${styles.icon} 
                ${alert.type === "error" && styles.error} 
                ${alert.type === "warning" && styles.warning} 
                ${alert.type === "noti" && styles.noti}`}
              >
                <FontAwesomeIcon icon={alertUtil[alert.type]} />
              </span>
              <span>{alert.message}</span>
            </div>
            <button onClick={alertOff}>&times;</button>
            {alert.link && alert.link.type === "external" ? (
              <a href={alert.link.url}>{alert.link.text}</a>
            ) : (
              alert.link && (
                <Link href={alert.link.url} passHref>
                  <a>{alert.link.text}</a>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
