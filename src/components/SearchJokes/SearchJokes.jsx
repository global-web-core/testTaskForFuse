import React, { useEffect, useState } from 'react';
import { TEXT, MIN_LENGTH_QUERY } from '../../globals/constants/constants';
import styles from './SearchJokes.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { lengthJokesSelect } from '../../store/Jokes/Jokes-selectors';
import { addQueryJokes } from '../../store/Jokes/Jokes-actions';

export const SearchJokes = () => {
  const lengthJokes = useSelector(lengthJokesSelect);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    if (searchQuery.length > MIN_LENGTH_QUERY) dispatch(addQueryJokes(searchQuery))
    if (searchQuery.length <= MIN_LENGTH_QUERY) dispatch(addQueryJokes(null))
  }, [searchQuery])
  
  return (
    <div className={styles.searchJokes}>
      <input placeholder={TEXT.searchJokes} autoFocus value={searchQuery} onChange={handleChange} minLength={MIN_LENGTH_QUERY + 1}></input>
      <span>{lengthJokes ? TEXT.foundJokes + lengthJokes : ''}</span>
    </div>
  );
}