import React from 'react';

import styles from './styles.css';

const Content = ({ children }) =>
  <main className={styles.main}>{children}</main>;

Content.propTypes = {
  children: React.PropTypes.node,
};

export default Content;
