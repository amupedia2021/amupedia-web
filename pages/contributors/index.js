import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ContCard from 'components/Contributors/ContCard';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header/Header';
import styles from '@styles/scss/contributor.module.scss';
import SearchResultNotFound from "../../components/common/SearchResultNotFound";


const Contributors = () => {

  const per_page = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [allContributors, setAllContributors] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [username, setUsername] = useState('');
  const [searchResultFound, setSearchResultFound] = useState(true);
  

  const fetchContributors = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/repos/amupedia2021/Project-Amupedia/contributors?per_page=100'
      );

      if (response.ok) {
        const contributorsData = await response.json();
        const contributorsDataFiltered = contributorsData.filter(
          (contributor) => !contributor.login.includes('dependabot[bot]')
        );
        setAllContributors(contributorsDataFiltered);
      } else {
        console.error('Failed to fetch contributors:', response.status);
      }
    } catch (error) {
      console.error('Error fetching contributors:', error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, []);

  useEffect(() => {
    const filteredContributors = allContributors.filter((eachContributor) =>
      eachContributor.login.toLowerCase().includes(username.toLowerCase())
    );
    setContributors(filteredContributors);

    const totalPage = Math.ceil(filteredContributors.length / per_page);
    setTotalPages(totalPage);

    setCurrentPage(1);

    setSearchResultFound(filteredContributors.length > 0); // Update search result found state
  }, [username, allContributors]);

  const visibleContributors = contributors.slice(
    (currentPage - 1) * per_page,
    currentPage * per_page
  );



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
        <input
          type='text'
          className={styles.details}
          placeholder='Enter GitHub username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.container}>
        {/* Render the SearchResultNotFound component when search result is not found */}
        {!searchResultFound ? (
          <SearchResultNotFound query={username} />
        ) : (
          visibleContributors.map((contributor) => (
            <ContCard
              key={contributor.id}
              image={contributor.avatar_url}
              title={contributor.login}
              commits={contributor.contributions}
              profile={contributor.html_url}
            />
          ))
        )}
      </div>
      {/* Hide pagination when search result is not found */}
      {searchResultFound && (
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Contributors;