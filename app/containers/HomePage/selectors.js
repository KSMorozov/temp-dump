import { createSelector } from 'reselect';

const selectHome = () => state => state.get('home');

const selectNews = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('news')
);

const selectError = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('error')
);

const selectLoading = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loading')
);

export default selectHome;
export {
  selectNews,
  selectError,
  selectLoading,
};
