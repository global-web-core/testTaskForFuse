import React from 'react';
import { SearchJokes, ListJokes } from '../../components';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <SearchJokes/>
      <ListJokes/>
    </main>
  );
}