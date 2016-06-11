/* eslint no-underscore-dangle: 0 react/jsx-no-bind: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import LigaZvezd from 'components/Brand/logo.svg';

import {
  selectCategories,
  selectProducts,
  selectError,
  selectLoading,
} from './selectors';

import {
  loadData,
} from './actions';

import PortfolioItem from 'components/PortfolioItem';

class Portfolio extends React.Component {
  componentWillMount() {
    this.props.onComponentWillMount();
  }

  componentWillReceiveProps(next) {
    if (next.location.query.category !== this.props.location.query.category) {
      this.props.onComponentWillMount();
    }
  }

  render() {
    const { categories, products, changeRoute } = this.props;
    return (
      <div className="pure-g">
        <div className="pure-u-1-24 pure-u-sm-2-24 pure-u-lg-3-24"></div>
        <div className="pure-u-22-24 pure-u-sm-20-24 pure-u-lg-18-24">
          <div className="box"><div><h1>Портфолио</h1></div></div>
          {categories && categories.map(category =>
            <PortfolioItem
              handleItemClick={changeRoute.bind(this, '/portfolio', { category: category.name }, undefined)}
              image={category.image}
              name={category.name}
              type={category.type}
              key={category._id}
            />
          )}
          {products && products.map(product =>
            <PortfolioItem
              handleItemClick={changeRoute.bind(this, `/portfolio/:${product._id}`, undefined, product)}
              image={product.image}
              name={product.name}
              type={product.type}
              key={product._id}
            />
          )}
          {categories &&
            <PortfolioItem
              handleItemClick={changeRoute.bind(this, '/portfolio', { category: 'Разные' }, undefined)}
              image={LigaZvezd}
              name={'Разные'}
              type={'Товары'}
            />
          }
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  changeRoute: React.PropTypes.func.isRequired,
  onComponentWillMount: React.PropTypes.func,
  location: React.PropTypes.object.isRequired,
  categories: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  products: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  loading: React.PropTypes.bool,
};

const mapStateToProps = createSelector(
  selectCategories(),
  selectProducts(),
  selectLoading(),
  selectError(),
  (categories, products, loading, error) => ({ categories, products, loading, error })
);

function mapDispatchToProps(dispatch) {
  return {
    onComponentWillMount: () => dispatch(loadData()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
