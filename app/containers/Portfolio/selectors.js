import { createSelector } from 'reselect';

const selectPortfolio = () => state => state.get('portfolio');

const selectCategories = () => createSelector(
  selectPortfolio(),
  (portfolioState) => portfolioState.get('categories')
);

const selectProducts = () => createSelector(
  selectPortfolio(),
  (portfolioState) => portfolioState.get('products')
);

const selectLoading = () => createSelector(
  selectPortfolio(),
  (portfolioState) => portfolioState.get('loading')
);

const selectError = () => createSelector(
  selectPortfolio(),
  (portfolioState) => portfolioState.get('error')
);


export default selectPortfolio;
export {
  selectError,
  selectLoading,
  selectProducts,
  selectCategories,
};
