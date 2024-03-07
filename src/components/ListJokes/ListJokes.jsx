import React, { useEffect, useState } from 'react';
import styles from './ListJokes.module.css';
import { Joke } from '../../components';
import { TEXT } from '../../globals/constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { queryForGetJokesSelect, listJokesSelect, lengthJokesSelect } from '../../store/Jokes/Jokes-selectors';
import { Jokes } from '../../models';
import { CODE_ANSWER, MIN_LENGTH_QUERY } from '../../globals/constants/constants';
import { addJokes } from '../../store/Jokes/Jokes-actions';
import { useDebouncedCallback } from 'use-debounce';

const startCard = 0;
const countCards = 20;
const timeForDebounce = 1000;

export const ListJokes = () => {
  const dispatch = useDispatch();
  const queryForGetJokes = useSelector(queryForGetJokesSelect);
  const listJokes = useSelector(listJokesSelect);
  const [isLoading, setIsLoading] = useState(false)
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [visibleJokes, setVisibleJokes] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const lengthJokes = useSelector(lengthJokesSelect);

  const debouncedGetJokesByQuery = useDebouncedCallback(async (query) => {
    setIsLoading(true)
    if (query?.length <= MIN_LENGTH_QUERY || !query) return
    try {
      const jokes = await Jokes.getAll(query)
      if (jokes.code !== CODE_ANSWER.ok || !jokes.data.result) {
        console.error(TEXT.failedRequestJokes)
        return;
      }
      dispatch(addJokes(jokes.data.result))
      
      const endVisible = jokes.data.result.length >= countCards ? countCards : jokes.data.result.length
      const newJokes = jokes.data.result.slice(startCard, endVisible)
      setVisibleJokes(newJokes)
      setCurrentPage(1)
    } catch {
      console.error(TEXT.failedRequestJokes)
    }
    setIsLoading(false)
    },
    timeForDebounce
  );

  useEffect(() => {
    if (queryForGetJokes && queryForGetJokes?.length > MIN_LENGTH_QUERY) {
      debouncedGetJokesByQuery(queryForGetJokes)
    } else {
      dispatch(addJokes([]))
      setVisibleJokes([])
      setCurrentPage(0)
    }
  }, [queryForGetJokes])

  const loadMoreJokes = async () => {
    setIsFetchingMore(true);
    const newJokes = listJokes.slice(currentPage * countCards, currentPage * countCards + countCards)
    setVisibleJokes(prevJokes => [...prevJokes, ...newJokes])

    setCurrentPage(prevCurrentPage => ++prevCurrentPage)
    setIsFetchingMore(false);
  };

  const countPagination = () => {
    return Math.ceil(lengthJokes / countCards);
  }

  if (isLoading) return (<div>{TEXT.loading}</div>)

  return (
    <>
      <div className={styles.listJokes}>
        {visibleJokes?.map(joke => (<Joke key={joke.id} dataJoke={joke} />))}
        {visibleJokes?.length === 0 && queryForGetJokes && (
          <div>
            {TEXT.listEmpty}
          </div>
        )}
      </div>
      {!isLoading && !isFetchingMore && visibleJokes?.length >= countCards && currentPage < countPagination() && (
        <button onClick={loadMoreJokes} className={styles.loadMore}>{TEXT.loadMore + ' ' + currentPage + '/' + countPagination()}</button>
      )}
      {isFetchingMore && (<div>{TEXT.loading}</div>)}
    </>
  );
}