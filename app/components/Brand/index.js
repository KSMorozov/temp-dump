import React from 'react';
import styles from './styles.css';
import Logo from './logo.svg';

const Brand = ({ small, onRouteChange }) =>
  <div className={`pure-u-${small ? '12-24' : '3-24'} ${styles.brand}`}>
    <a onTouchTap={onRouteChange.bind(this, '/', undefined, undefined)}>
      <img src={Logo} alt="logo" className={styles.logo} />
    </a>
  </div>;

Brand.propTypes = {
  onRouteChange: React.PropTypes.func.isRequired,
  small: React.PropTypes.bool.isRequired,
};

export default Brand;
