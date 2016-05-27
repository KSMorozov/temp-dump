import React from 'react';
import styles from './styles.css';
import Menu from 'material-ui/svg-icons/navigation/menu';

const Hamburger = ({ small, onToggleDrawer }) =>
  <div className={`${small ? 'pure-u-12-24' : 'pure-u-3-24'} wrapper`}>
    <div className="pure-u-17-24">&nbsp;</div>
    <Menu className={styles.hamburger} hidden={!small} onTouchTap={onToggleDrawer} />
  </div>;

Hamburger.propTypes = {
  onToggleDrawer: React.PropTypes.func.isRequired,
  small: React.PropTypes.bool.isRequired,
};

export default Hamburger;
