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
          linkedin={"linkedin.com/in/haider-ali-553751223"}
          name={"Haider Ali"}
          photo={"/images/team/haider.jpg"}
          desig={"Co-Founder and Core Developer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/anmol-agrawal-748389151/"}
          name={"Anmol Agrawal"}
          photo={"/images/team/Anmol.jpg"}
          desig={"Founder"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/abhishek-sharma-0a483a212/"}
          name={"Abhishek Sharma"}
          photo={"/images/team/IMG-20220306-WA0033.jpg"}
          desig={"Co-Founder"}
        />
        <Card
          facebook={"#"}
          insta={
            "https://www.instagram.com/ashraydixitad/"
          }
          

          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/ashray-dixit?trk=people-guest_people_search-card&originalSubdomain=in"}
          name={"Ashray Dixit"}
          photo={"/images/team/Ashray.jpeg"}
          desig={"Treasurer"}
        />
        <Card
          facebook={"#"}
          insta={"https://www.instagram.com/sabahat_alig/"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/sabahatahmadkhan/"}
          name={"Sabahat"}
          photo={"/images/team/Sabahat.JPG"}
          desig={"Management Head"}
        />
        <Card
          facebook={"#"}
          insta={"https://www.instagram.com/?hl=en"}
          twitter={"#"}
          linkedin={
            "https://www.linkedin.com/in/sayyed-arib-hussain-1220b5187/"
          }
          name={"Aarib"}
          photo={"/images/team/Aarib.jpg"}
          desig={"Web Developer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/muhammad-jufri/"}
          name={"Muhammad"}
          photo={"/images/team/Muhammad.jfif"}
          desig={"Web Developer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/hamid17/"}
          name={"Hamid Husain"}
          photo={"/images/team/Hamid.jpg"}
          desig={"Web Developer"}
        />
                <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Mohd Huzaifa"}
          photo={"/images/team/Huzaifa.jpg"}
          desig={"Web Developer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/muhaiyuddin/"}
          name={"Muhaiyuddin"}
          photo={"/images/team/muhyuddin.jpeg"}
          desig={"Search Engine Optimization Manager"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/shalini_baghel?igshid=YmMyMTA2M2Y="}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/shalini-baghel-b058b0216"}
          name={"Shalini Baghel"}
          photo={"/images/team/Shalini.jpeg"}
          desig={"Search Engine Optimization Manager"}
        />


        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Abdul Saboor"}
          photo={"/images/team/Abdul.jpg"}
          desig={"Management Team member"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Muskan Azmi"}
          photo={"/images/team/Muskan.jpg"}
          desig={"Content Writer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Mohd Areeb"}
          photo={"/images/team/AREEB.jpeg"}
          desig={"Graphics Designer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Faisal Ahmad"}
          photo={"/images/team/FAISAL.jpg"}
          desig={"Graphics Designer"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/lostincaves?r=nametag"}
          twitter={"#"}
          linkedin={"#"}
          name={"Aakifah Aiman"}
          photo={"/images/team/Aakifah.jpeg"}
          desig={"Social Media Team head"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/laksh__gupta.__?igshid=YmMyMTA2M2Y="}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/laksh-gupta-a35a66221"}
          name={"Laksh Gupta"}
          photo={"/images/team/Lakshya.jpg"}
          desig={"Social media Team member"}
        />
      </div>
    </>
  );
};

export default Team;
