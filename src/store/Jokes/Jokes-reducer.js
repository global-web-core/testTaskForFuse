import { jokesAction } from "./Jokes-actions";

const initialState = {
  data: null,
  length: null,
  query: null,
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case jokesAction.ADD_JOKES:
      return {
        ...state,
        data: action.payload,
        length: action.payload.length,
      };
    case jokesAction.ADD_QUERY:
      return {
        ...state,
        query: action.payload
      };
		case jokesAction.CLEAR:
      return {
        ...state,
        data: null,
        length: null,
      };
    default:
      return state;
  }
};

export { jokesReducer, jokesAction };