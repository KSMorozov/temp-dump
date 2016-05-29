import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import Map from './map.png';

class Contacts extends React.Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-24 pure-u-sm-2-24 pure-u-lg-3-24"></div>
        <div className="pure-u-22-24 pure-u-sm-20-24 pure-u-lg-18-24">
          <div className="box"><div><h1>Контакты</h1></div></div>
          <div className="pure-u-1-1  pure-u-xl-12-24 box">
            <Card>
              <CardMedia overlay={<CardTitle title="Как нас найти" subtitle="на карте" />}>
                <img src={Map} alt="Наш офис" />
              </CardMedia>
            </Card>
          </div>
          <div className="pure-u-1-1  pure-u-xl-12-24 box">
            <Card>
              <CardTitle title="The Greatness Agenda" subtitle="The Greatness Agenda" />
              <CardText>
                The Greatness Agenda is a strategic framework built on five pillars: amazing product, incredible savings, easy experience, personalized connections and winning teams. Ultimately, our goal is to be the most engaging retailer in America. We will achieve that goal by focusing on our customers and creating product assortments that excite them. By building genuine, lasting relationships with them. By designing easy, seamless shopping experiences no matter how our customer shops. By helping customers get more from every dollar they spend at Kohl’s. And by building teams of engaged and talented Associates. Kohl’s is on the path to greatness.
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
