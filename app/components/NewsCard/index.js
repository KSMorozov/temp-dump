import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const NewsCard = ({ title, subtitle, body, image }) =>
  <div className="pure-u-1-1 pure-u-lg-12-24 box">
    <Card>
      <CardMedia>
        {image && <img src={image} alt="Новость" />}
      </CardMedia>
      <CardTitle title={title} subtitle={subtitle} />
      <CardText>
        {body}
      </CardText>
    </Card>
  </div>;

NewsCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  image: React.PropTypes.string,
};

export default NewsCard;
