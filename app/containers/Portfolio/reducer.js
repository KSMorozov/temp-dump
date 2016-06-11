import { fromJS } from 'immutable';

import {
  LOAD_PORTFOLIO,
  LOAD_PORTFOLIO_ERROR,
  LOAD_PORTFOLIO_SUCCESS,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_ERROR,
  LOAD_CATEGORIES_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  products: false,
  categories: false,
});

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('categories', false);
    case LOAD_CATEGORIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_CATEGORIES_SUCCESS:
      return state
        .set('categories', action.categories)
        .set('products', false)
        .set('loading', false);
    case LOAD_PORTFOLIO:
      return state
        .set('loading', true)
        .set('error', false)
        .set('products', false);
    case LOAD_PORTFOLIO_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_PORTFOLIO_SUCCESS:
      return state
        .set('products', action.portfolio)
        .set('categories', false)
        .set('loading', false);
    default:
      return state;
  }
}

export default portfolioReducer;
