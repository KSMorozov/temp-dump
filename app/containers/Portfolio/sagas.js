import { take, call, put, race, select } from 'redux-saga/effects';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_PORTFOLIO, LOAD_CATEGORIES, LOAD_DATA } from './constants';
import { portfolioLoaded, portfolioLoadingError, categoriesLoaded, categoriesLoadingError, loadCategories, loadPortfolio } from './actions';

import request from 'utils/request';
import { selectQuery, selectQuerySize } from 'containers/App/selectors';

export function* getData() {
  const query = yield select(selectQuery());
  const querySize = yield select(selectQuerySize());
  while (true) { // eslint-disable-line no-constant-condition
    const watcher = yield race({
      loadData: take(LOAD_DATA),
      stop: take(LOCATION_CHANGE),
    });
    if (watcher.stop) break;
    if (querySize && query.category) yield put(loadPortfolio());
    else yield put(loadCategories());
  }
}

export function* getCategories() {
  while (true) { // eslint-disable-line no-constant-condition
    const watcher = yield race({
      loadCategories: take(LOAD_CATEGORIES),
      stop: take(LOCATION_CHANGE),
    });
    if (watcher.stop) break;

    const categories = yield call(request, '/api/categories', { method: 'GET' });

    if (categories.err === undefined || categories.err === null) yield put(categoriesLoaded(categories.data.categories));
    else yield put(categoriesLoadingError(categories.err));
  }
}

export function* getPortfolio() {
  const query = yield select(selectQuery());
  const querySize = yield select(selectQuerySize());
  while (true) { // eslint-disable-line no-constant-condition
    const watcher = yield race({
      loadPortfolio: take(LOAD_PORTFOLIO),
      stop: take(LOCATION_CHANGE),
    });

    if (watcher.stop) break;
    if (!querySize || !query.category) break;
    const portfolio = yield call(request, `/api/products?category=${query.category}`, { method: 'GET' });
    if (portfolio.err === undefined || portfolio.err === null) yield put(portfolioLoaded(portfolio.data.products));
    else yield put(portfolioLoadingError(portfolio.err));
  }
}

export default [
  getData,
  getPortfolio,
  getCategories,
];
