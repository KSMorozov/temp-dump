import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import styles from './styles.css';

const PortfolioItem = ({ image, type, name, handleItemClick }) =>
  <div className="pure-u-1-1 pure-u-sm-1-2 pure-u-xl-1-4 box">
    <Card className={styles.card}>
      <a onTouchTap={handleItemClick}>
        <CardMedia overlay={<CardTitle title={name} subtitle={type} />} mediaStyle={{ height: '350px', maxWidth: '250px', margin: '0 auto' }}>
          <img src={image} alt={`${type} ${name}`} style={{ maxHeight: '350px' }} />
        </CardMedia>
      </a>
    </Card>
  </div>;

PortfolioItem.propTypes = {
  handleItemClick: React.PropTypes.func.isRequired,
  image: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
};

export default PortfolioItem;
