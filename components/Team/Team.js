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
          photo={"/images/team/haider.webp"}
          desig={"Co-Founder and Core Developer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/anmol-agrawal-748389151/"}
          name={"Anmol Agrawal"}
          photo={"/images/team/Anmol.webp"}
          desig={"Founder"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/abhishek-sharma-0a483a212/"}
          name={"Abhishek Sharma"}
          photo={"/images/team/IMG-20220306-WA0033.webp"}
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
          photo={"/images/team/Ashray.webp"}
          desig={"Treasurer"}
        />
        <Card
          facebook={"#"}
          insta={"https://www.instagram.com/sabahat_alig/"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/sabahatahmadkhan/"}
          name={"Sabahat"}
          photo={"/images/team/Sabahat.webp"}
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
          photo={"/images/team/Aarib.webp"}
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
          photo={"/images/team/Hamid.webp"}
          desig={"Web Developer"}
        />
                <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Mohd Huzaifa"}
          photo={"/images/team/Huzaifa.webp"}
          desig={"Web Developer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/muhaiyuddin/"}
          name={"Muhaiyuddin"}
          photo={"/images/team/muhyuddin.webp"}
          desig={"Search Engine Optimization Manager"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/shalini_baghel?igshid=YmMyMTA2M2Y="}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/shalini-baghel-b058b0216"}
          name={"Shalini Baghel"}
          photo={"/images/team/Shalini.webp"}
          desig={"Content Writer Head"}
        />


        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Abdul Saboor"}
          photo={"/images/team/Abdul.webp"}
          desig={"Management Team member"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Muskan Azmi"}
          photo={"/images/team/Muskan.webp"}
          desig={"Content Writer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Mohd Areeb"}
          photo={"/images/team/AREEB.webp"}
          desig={"Graphics Designer"}
        />
        <Card
          facebook={"#"}
          insta={"#"}
          twitter={"#"}
          linkedin={"#"}
          name={"Faisal Ahmad"}
          photo={"/images/team/FAISAL.webp"}
          desig={"Graphics Designer"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/lostincaves?r=nametag"}
          twitter={"#"}
          linkedin={"#"}
          name={"Aakifah Aiman"}
          photo={"/images/team/Aakifah.webp"}
          desig={"Social Media Team head"}
        />
        <Card
          facebook={"#"}
          insta={"https://instagram.com/laksh__gupta.__?igshid=YmMyMTA2M2Y="}
          twitter={"#"}
          linkedin={"https://www.linkedin.com/in/laksh-gupta-a35a66221"}
          name={"Laksh Gupta"}
          photo={"/images/team/Lakshya.webp"}
          desig={"Social media Team member"}
        />
      </div>
    </>
  );
};

export default Team;
