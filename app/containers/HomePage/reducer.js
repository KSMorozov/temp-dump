import { fromJS } from 'immutable';

import {
  LOAD_NEWS,
  LOAD_NEWS_ERROR,
  LOAD_NEWS_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  news: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_NEWS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('news', false);
    case LOAD_NEWS_SUCCESS:
      return state
        .set('news', action.news)
        .set('loading', false);
    case LOAD_NEWS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
