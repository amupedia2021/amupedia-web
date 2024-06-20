import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from 'styles/Home.module.css'; // Import your styles


const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/quotes?limit=10');
        setQuotes(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuotes();
  }, []);

  if (quotes.length === 0) {
    return <p>Loading quotes...</p>;
  }

  return (
    <div data-aos="fade-up">
      <h2 className={styles.grabh2}>Quotes</h2>
      <div className={styles['quotes-container']}>
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          effect={'slide'} // Add the effect prop to enable auto transition
          autoplay={{ delay: 3000 }} // Set the delay (in ms) for auto transition
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={quote._id}>
              <div className={styles['quote-wrapper']}>
                <p className={styles['quote-text']}><b>"{quote.content}"</b></p>
                <p>- {quote.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Quotes;
