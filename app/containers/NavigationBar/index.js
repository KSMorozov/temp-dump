import React from 'react';

import withWidth, { LARGE } from 'material-ui/utils/withWidth';

import Brand from 'components/Brand';
import Navigation from 'components/Navigation';
import Hamburger from 'components/Hamburger';

import styles from './styles.css';

class NavigationBar extends React.Component {
  static propTypes = {
    onToggleDrawer: React.PropTypes.func.isRequired,
    onRouteChange: React.PropTypes.func.isRequired,
    height: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    LARGE: React.PropTypes.bool,
  }

  render() {
    const { width, height, onToggleDrawer, onRouteChange } = this.props;
    const small = width !== LARGE;
    return (
      <div className={`${styles.navigationBar} pure-g card`} style={{ height }}>
        <Brand small={small} onRouteChange={onRouteChange} />
        <Navigation small={small} onRouteChange={onRouteChange} />
        <Hamburger small={small} onToggleDrawer={onToggleDrawer} />
      </div>
    );
  }
}

export default withWidth()(NavigationBar);
