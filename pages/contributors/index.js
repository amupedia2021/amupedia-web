import React, { useEffect, useState } from "react";
import Head from "next/head";
import ContCard from "components/Contributors/ContCard";
import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import styles from "@styles/scss/contributor.module.scss";
const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/aysal04/Project-Amupedia/contributors",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },            
          }
        );

        if (response.ok) {
          const contributorsData = await response.json();
          setContributors(contributorsData);
        } else {
          console.error("Failed to fetch contributors:", response.status);
        }
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <>
      <Head>
        <title>Contributors | Amupedia</title>
        <meta
          name="description"
          content="Here are our contributors for this project"
        />
      </Head>
      <Header text="Contributors" />
      <div className={styles.container}>
        {contributors.map((contributor) => (
          <ContCard
            key={contributor.id}
            image={contributor.avatar_url}
            title={contributor.login}
            commits={contributor.contributions}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Contributors;
