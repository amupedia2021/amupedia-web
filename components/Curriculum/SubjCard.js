import styles from "@styles/scss/subjcard.module.scss";
import Link from "next/link";
import Avatar from '@mui/material/Avatar';


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
  };
}
const SubjCard = ({ details }) => {
  
  return (
    <Link href={details.linkToPage} passHref>
      <div className={styles.subject}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", margin:'15px 0',padding:"10px 10px"}}>
        <Avatar {...stringAvatar(details.name)} />
        </div>
        <span className={styles.name}>{details.name}</span>
      </div>
    </Link>
  );
};

export default SubjCard;
