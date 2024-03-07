export const jokesAction = {
  ADD_JOKES: 'JOKES/ADD_JOKES',
  ADD_QUERY: 'JOKES/ADD_QUERY',
	CLEAR: 'JOKES/CLEAR',
}

export const addJokes = (payload) => ({
  type: jokesAction.ADD_JOKES,
  payload,
});

export const addQueryJokes = (payload) => ({
  type: jokesAction.ADD_QUERY,
  payload,
});

export const clearJokes = () => ({
  type: jokesAction.CLEAR,
});