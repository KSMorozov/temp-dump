import {
  LOAD_NEWS,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_ERROR,
} from './constants';

/**
 * Load the news articles, this action starts the getNews saga
 *
 * @return {object} An action object with a type of LOAD_NEWS
 */
export function loadNews() {
  return {
    type: LOAD_NEWS,
  };
}

/**
 * Dispatched when the news articles are loaded by the getNews saga
 *
 * @param  {array} news articles data
 *
 * @return {object}      An action object with a type of LOAD_NEWS_SUCCESS passing the repos
 */
export function newsLoaded(news) {
  return {
    type: LOAD_NEWS_SUCCESS,
    news,
  };
}

/**
 * Dispatched when loading the news articles fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_NEWS_ERROR passing the error
 */
export function newsLoadingError(error) {
  return {
    type: LOAD_NEWS_ERROR,
    error,
  };
}
