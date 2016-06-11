import {
  LOAD_PORTFOLIO,
  LOAD_PORTFOLIO_SUCCESS,
  LOAD_PORTFOLIO_ERROR,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
  LOAD_DATA,
} from './constants';

/**
 * Decides if load portfolio or categories, this action starts the getData saga
 *
 * @return {object} An action object with a type of LOAD_DATA
 */
export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

/**
 * Load the portfolio items, this action starts the getPortfolio saga
 *
 * @return {object} An action object with a type of LOAD_PORTFOLIO
 */
export function loadPortfolio() {
  return {
    type: LOAD_PORTFOLIO,
  };
}

/**
 * Dispatched when the portfolio items are loaded by the getPortfolio saga
 *
 * @param  {array} portfolio items data
 *
 * @return {object}      An action object with a type of LOAD_PORTFOLIO_SUCCESS passing the portfolio items
 */
export function portfolioLoaded(portfolio) {
  return {
    type: LOAD_PORTFOLIO_SUCCESS,
    portfolio,
  };
}

/**
 * Dispatched when loading the portfolio items fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PORTFOLIO_ERROR passing the error
 */
export function portfolioLoadingError(error) {
  return {
    type: LOAD_PORTFOLIO_ERROR,
    error,
  };
}

/**
 * Load the category items, this action starts the getCategories saga
 *
 * @return {object} An action object with a type of LOAD_CATEGORIES
 */
export function loadCategories() {
  return {
    type: LOAD_CATEGORIES,
  };
}

/**
 * Dispatched when the category items are loaded by the getCategories saga
 *
 * @param  {array} category items data
 *
 * @return {object}      An action object with a type of LOAD_CATEGORIES_SUCCESS passing the categories
 */
export function categoriesLoaded(categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories,
  };
}

/**
 * Dispatched when loading the category items fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CATEGORIES_ERROR passing the error
 */
export function categoriesLoadingError(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    error,
  };
}
