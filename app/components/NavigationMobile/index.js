import React from 'react';
import Drawer from 'material-ui/Drawer';
import styles from './styles.css';

const NavigationMobile = ({ showDrawer, onToggleDrawer, onRouteChange }) =>
  <Drawer docked={false} width={320} open={showDrawer} onRequestChange={onToggleDrawer} className={styles.drawer}>
    <ul className="pure-u-1-1">
      <li className={`pure-u-1-1 ${styles.item}`} onTouchTap={onToggleDrawer}>
        <a onTouchTap={onRouteChange.bind(this, '/', undefined, undefined)} className={`${styles.link} pure-u-1-1`}>Главная</a>
      </li>
      <li className={`pure-u-1-1 ${styles.item}`} onTouchTap={onToggleDrawer}>
        <a onTouchTap={onRouteChange.bind(this, '/portfolio', undefined, undefined)} className={`${styles.link} pure-u-1-1`}>Портфолио</a>
      </li>
      <li className={`pure-u-1-1 ${styles.item}`} onTouchTap={onToggleDrawer}>
        <a onTouchTap={onRouteChange.bind(this, '/about', undefined, undefined)} className={`${styles.link} pure-u-1-1`}>О Нас</a>
      </li>
      <li className={`pure-u-1-1 ${styles.item}`} onTouchTap={onToggleDrawer}>
        <a onTouchTap={onRouteChange.bind(this, '/contacts', undefined, undefined)} className={`${styles.link} pure-u-1-1`}>Контакты</a>
      </li>
    </ul>
  </Drawer>;

NavigationMobile.propTypes = {
  showDrawer: React.PropTypes.bool.isRequired,
  onToggleDrawer: React.PropTypes.func.isRequired,
  onRouteChange: React.PropTypes.func.isRequired,
};

export default NavigationMobile;
