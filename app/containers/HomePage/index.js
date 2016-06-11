/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';

import {
  selectNews,
  selectError,
  selectLoading,
} from './selectors';

import { loadNews } from './actions';

import NewsCard from 'components/NewsCard';
import Image from './soccer.jpg';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  // componentDidMount() {
  //   this.props.changeRoute.bind(this, '/portfolio', undefined, undefined);
  // }

  render() {
    const { news } = this.props;
    return (
      <div className="pure-g">
        <div className="pure-u-1-24 pure-u-sm-2-24 pure-u-lg-3-24"></div>
        <div className="pure-u-22-24 pure-u-sm-20-24 pure-u-lg-18-24">
          <div className="box"><div><h1>Новости</h1></div></div>
          {news && news.map((article) => (
            <NewsCard
              subtitle={article.subtitle}
              image={Image}
              body={article.body}
              title={article.title}
              key={article._id}
            />
          ))}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  news: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createSelector(
  selectNews(),
  selectError(),
  selectLoading(),
  (news, error, loading) => ({ news, error, loading })
);

// onComponentWillMount: () => dispatch(loadNews()),

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
