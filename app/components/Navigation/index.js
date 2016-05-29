import React from 'react';
import styles from './styles.css';

const Navigation = ({ small, onRouteChange }) =>
  <div className={'pure-u-18-24'} hidden={small}>
    <div className="pure-u-3-5">&nbsp;</div>
    <ul className={`pure-u-2-5 ${styles.menu}`}>
      <li className={`pure-u-1-3 ${styles.item}`}>
        <a onTouchTap={onRouteChange.bind(this, '/portfolio', undefined, undefined)} className={`${styles.link} pure-u-1-1`}>Портфолио</a>
      </li>
      <li className={`pure-u-1-3 ${styles.item}`}>
        <a onTouchTap={onRouteChange.bind(this, '/about', undefined, undefined)} className={`${styles.link} pure-u-1-1`}>О Нас</a>
      </li>
      <li className={`pure-u-1-3 ${styles.item}`}>
        <a onTouchTap={onRouteChange.bind(this, '/contacts', undefined, undefined)} className={`${styles.link} pure-u-1-1`}>Контакты</a>
      </li>
    </ul>
  </div>;

Navigation.propTypes = {
  onRouteChange: React.PropTypes.func.isRequired,
  small: React.PropTypes.bool.isRequired,
};

export default Navigation;
