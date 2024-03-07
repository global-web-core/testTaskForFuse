const TEXT = {
	loading: "Loading",
	notFound: "Page not foumd",
	goToHome: 'Go to home',
	searchJokes: 'Search jokes..',
	foundJokes: 'Found jokes: ',
	failedRequestJokes: 'Failed request jokes',
	listEmpty: 'List empty',
	loadMore: 'Load more',
}

const CONTROLLERS = {
	jokes: "jokes/search?query=",
}

const METHOD_HTTP = {
	get: "get",
	post: "post",
	delete: "delete",
	put: "put"
}

const CODE_ANSWER = {
	ok: 200
}

const API_URL = 'https://api.chucknorris.io';

const MIN_LENGTH_QUERY = 3;

export {
	TEXT,
	CONTROLLERS,
	METHOD_HTTP,
	CODE_ANSWER,
	API_URL,
	MIN_LENGTH_QUERY
}