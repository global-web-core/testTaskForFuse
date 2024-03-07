import React, { useEffect, useState } from 'react';
import styles from './Joke.module.css';
import PropTypes from 'prop-types';

export const Joke = ({dataJoke}) => {
  const [createdAtDate, setCreatedAtDate] = useState('');

  const handleClickByCard = () => {
    window.location.href = dataJoke.url;
  }

  const formattedDate = () => {
    const date = new Date(dataJoke.created_at);
    const formateDate = date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    setCreatedAtDate(formateDate)
  }
  useEffect(() => {
    formattedDate()
  }, [])

  return (
    <div className={styles.joke} onClick={handleClickByCard}>
      <div className={styles.container}>
        <div className={styles.content}>{dataJoke.value}</div>
        <div className={styles.meta}>
          <div>{dataJoke.id}</div>
          <div>{createdAtDate}</div>
        </div>
      </div>
    </div>
  );
}

Joke.propTypes = {
  dataJoke: PropTypes.object.isRequired,
};