import styles from "@styles/scss/main.module.scss";
import Card from "./Teamcard";

const Team = () => {
  return (
    <>
      <h2 className={styles.heading}>Our Team</h2>
      <div className={styles.team}>
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Haider Ali"}
          photo={"/images/team/haider.jpg"}
          desig={"Co-Founder and Core Developer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={
            "https://www.linkedin.com/in/sayyed-arib-hussain-1220b5187/"
          }
          github={"https://www.github.com/sayyedarib"}
          name={"Anmol Agrawal"}
          photo={"/public/images/team/Anmol Agrawal.jpg"}
          desig={"Founder"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Abhishek Sharma"}
          photo={"/public/images/team/"}
          desig={"Co-Founder"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Muhaiyuddin Sabir"}
          photo={""}
          desig={"Search Engine Optimization Manager"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Hamid Husain"}
          photo={"/public/images/team/Hamid Husain.jpg"}
          desig={"Web Devloper"}
        />
        <Card
          facebook={"#"}
          insta={"https://www.instagram.com/?hl=en"}
          twitter={"#"}
          linkedin={
            "https://www.linkedin.com/in/sayyed-arib-hussain-1220b5187/"
          }
          name={"Sayyed Arib Hussain"}
          photo={"/public/images/team/Aarib.jpg"}
          desig={"Web Devloper"}
        />

        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Mohd Huzaifa"}
          photo={"/public/images/team/Mohd Huzaifa Khan.jpg"}
          desig={"Designation"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Abdul Saboor"}
          photo={"/public/images/team/Abdul Saboor.jpg"}
          desig={"Management Team member"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Muskan Azmi"}
          photo={"/public/images/team/Muskan Azmi.jpg"}
          desig={"Content Writer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Mohd Areeb Hasan Khan"}
          photo={"/public/images/team/MOHAMMAD AREEB HASAN KHAN.jpeg"}
          desig={"Graphics Designer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Faisal Ahmad "}
          photo={"/public/images/team/FAISAL AHMAD.jpg"}
          desig={"Graphics Designer"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/lostincaves?r=nametag"}
          twitter={"#"}
          linkedin={"#"}
          name={"Aakifah Aiman Sayyeda"}
          photo={"/public/images/team/Aakifah Aiman.jpeg"}
          desig={"Social Media Team head"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/laksh__gupta.__?igshid=YmMyMTA2M2Y="}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/laksh-gupta-a35a66221"}
          name={"Laksh Gupta "}
          photo={"/public/images/team/Lakshya.jpg"}
          desig={"Social media member"}
        />
      </div>
    </>
  );
};

export default Team;
