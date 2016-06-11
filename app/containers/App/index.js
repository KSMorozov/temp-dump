/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createSelector } from 'reselect';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { selectShowDrawer } from './selectors';
import { toggleDrawer } from './actions';

import NavigationBar from 'containers/NavigationBar';
import NavigationMobile from 'components/NavigationMobile';
import Content from 'components/Content';
import Footer from 'components/Footer';

import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    showDrawer: React.PropTypes.bool.isRequired,
    changeRoute: React.PropTypes.func.isRequired,
    onToggleDrawer: React.PropTypes.func.isRequired,
  };

  render() {
    const { showDrawer, onToggleDrawer, changeRoute } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={styles.app}>
          <NavigationBar height="5em" onToggleDrawer={onToggleDrawer} onRouteChange={changeRoute} />
          <Content>
            {this.props.children && React.cloneElement(this.props.children, { changeRoute })}
          </Content>
          <NavigationMobile showDrawer={showDrawer} onToggleDrawer={onToggleDrawer} onRouteChange={changeRoute} />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = createSelector(
  selectShowDrawer(),
  (showDrawer) => ({ showDrawer })
);

function mapDispatchToProps(dispatch) {
  return {
    onToggleDrawer: () => dispatch(toggleDrawer()),
    changeRoute: (url, query, state) => dispatch(push({ pathname: url, query, state })),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
