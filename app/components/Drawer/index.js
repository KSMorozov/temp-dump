import React from 'react';
import Drawer from 'material-ui/Drawer';
import styles from './styles.css';

const NavigationMobile = ({ showDrawer, onToggleDrawer }) =>
  <Drawer docked={false} width={320} open={showDrawer} onRequestChange={onToggleDrawer}>
    <ul className="pure-u-1-1">
      <li className={`pure-u-1-1 ${styles.item}`}>
        <a className={`${styles.link} pure-u-1-1`}>Портфолио</a>
      </li>
      <li className={`pure-u-1-1 ${styles.item}`}>
        <a className={`${styles.link} pure-u-1-1`}>О Нас</a>
      </li>
      <li className={`pure-u-1-1 ${styles.item}`}>
        <a className={`${styles.link} pure-u-1-1`}>Контакты</a>
      </li>
    </ul>;
  </Drawer>;

NavigationMobile.propTypes = {
  showDrawer: React.PropTypes.bool.isRequired,
  onToggleDrawer: React.PropTypes.func.isRequired,
};

export default NavigationMobile;
