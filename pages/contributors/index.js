import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ContCard from 'components/Contributors/ContCard';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header/Header';
import styles from '@styles/scss/contributor.module.scss';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchContributors = async (page) => {
    const url = `https://api.github.com/repos/amupedia2021/Project-Amupedia/contributors?page=${page}&per_page=10`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const contributorsData = await response.json();
        const contributorsDataFiltered = contributorsData.filter(
          (contributor) => !contributor.login.includes('dependabot[bot]')
        );
        setContributors(contributorsDataFiltered);
        const linkHeader = response.headers.get('Link');
        const totalPages = extractTotalPages(linkHeader);
        setTotalPages(totalPages);
      } else {
        console.error('Failed to fetch contributors:', response.status);
      }
    } catch (error) {
      console.error('Error fetching contributors:', error);
    }
  };

  const extractTotalPages = (linkHeader) => {
    if (!linkHeader) return 0;
    const regex = /<.+[?&]page=(\d+)&per_page=\d+>; rel="last"/;
    const matches = linkHeader.match(regex);
    return matches ? parseInt(matches[1]) : 0;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      fetchContributors(nextPage);
      setCurrentPage(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      fetchContributors(previousPage);
      setCurrentPage(previousPage);
    }
  };

  useEffect(() => {
    fetchContributors(currentPage);
  }, [currentPage]);

  return (
    <>
      <Head>
        <title>Contributors | Amupedia</title>
        <meta
          name='description'
          content='Here are our contributors for this project'
        />
      </Head>
      <Header text='Contributors' />
      <div className={styles.container}>
        {contributors.map((contributor) => (
          <ContCard
            key={contributor.id}
            image={contributor.avatar_url}
            title={contributor.login}
            commits={contributor.contributions}
            profile={contributor.html_url}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Contributors;
