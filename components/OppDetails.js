
                                                     

import styles from "../styles/OppDetails.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/index";
import React from "react";

function OppDetails() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Title of the Opportunity </h2>
        <button className={styles.applyBtn}>Apply Now</button>
      </div>
      <span className={styles.date}>Date Added/Updated</span>

      <div className={styles.body}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          iure corporis maxime odit minus, animi quis corrupti numquam libero
          obcaecati reprehenderit laboriosam laudantium quo officia qui ad
          pariatur natus quia a. Eius, minima nobis dolores non dicta iusto
          incidunt esse! Hic, laudantium delectus sit doloribus iste, dolore
          neque fugiat, quos reiciendis dicta iusto accusamus. Dolor quam quasi
          omnis, obcaecati nesciunt sequi vitae nam, commodi blanditiis aut, vel
          minima. Quasi, sapiente. Officia, dolorum. Fuga, maxime earum rem esse
          doloribus adipisci, unde corrupti explicabo ipsum itaque, vel
          accusamus voluptatem reiciendis. Excepturi, at! Nostrum ullam saepe
          impedit accusantium quia, praesentium dolore qui autem totam nam et
          voluptates dolorem id quod rem voluptatibus doloremque. Voluptatem,
          praesentium. Nisi molestiae ex earum optio labore hic esse sunt id
          iure consequuntur beatae in incidunt ducimus sed rem, nemo sapiente
          corporis atque debitis. Aut provident inventore corrupti, libero vel
          maiores, ipsam, error ratione molestias adipisci ullam expedita harum.
        </p>
      </div>
      <div className={styles.footer}>
        <button className={styles.applyBtn}>Apply Now</button>
        <a href="#">
          Explore More Opportunities
          <FontAwesomeIcon  icon={faChevronRight} />
        </a>
      </div>
    </div>
  );
}

export default OppDetails;
