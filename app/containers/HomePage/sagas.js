import { take, call, put, race } from 'redux-saga/effects';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_NEWS } from './constants';
import { newsLoaded, newsLoadingError } from './actions';

import request from 'utils/request';

export function* getNews() {
  while (true) { // eslint-disable-line no-constant-condition
    const watcher = yield race({
      loadNews: take(LOAD_NEWS),
      stop: take(LOCATION_CHANGE),
    });

    if (watcher.stop) break;

    const news = yield call(request, '/api/news', { method: 'GET' });

    if (news.err === undefined || news.err === null) yield put(newsLoaded(news.data.articles));
    else yield put(newsLoadingError(news.err));
  }
}

export default [
  getNews,
];
