/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import React from 'react';
import Image from './soccer.jpg';

const placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisl metus, sed molestie libero porta et. Sed sem massa, faucibus sit amet lectus at, placerat iaculis nisi. Proin egestas metus diam, in semper nunc facilisis at. Proin non risus purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Phasellus eu commodo eros. Maecenas id enim felis. Nullam dictum porta enim, in bibendum risus posuere ac. Praesent maximus quam in nisl maximus, a vehicula elit elementum. Sed dapibus turpis vestibulum sem fringilla convallis. Phasellus maximus, nunc vel fermentum feugiat, mauris nibh tempor risus, vitae dictum nibh ligula ut nisi. Mauris cursus fringilla elit quis maximus. Vivamus in tincidunt mi. Duis molestie libero turpis, sodales ultrices risus rutrum at. Nam vitae pharetra dolor.';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-24 pure-u-sm-2-24 pure-u-lg-3-24"></div>
        <div className="pure-u-22-24 pure-u-sm-20-24 pure-u-lg-18-24">
          <div className="box"><div><h1>Новости</h1></div></div>
          <div className="pure-u-1-1 pure-u-lg-12-24 box">
            <Card>
              <CardMedia>
                <img src={Image} alt="Новость" />
              </CardMedia>
              <CardTitle title="News Title" subtitle="News subtitle" />
              <CardText>
                {placeholder}
              </CardText>
            </Card>
          </div>
          <div className="pure-u-1-1 pure-u-lg-12-24 box">
            <Card>
              <CardMedia>
                <img src={Image} alt="Карта Проезда" />
              </CardMedia>
              <CardTitle title="News Title" subtitle="News subtitle" />
              <CardText>
                {placeholder}
              </CardText>
            </Card>
          </div>
          <div className="pure-u-1-1 pure-u-lg-12-24 box">
            <Card>
              <CardMedia>
                <img src={Image} alt="Карта Проезда" />
              </CardMedia>
              <CardTitle title="News Title" subtitle="News subtitle" />
              <CardText>
                {placeholder}
              </CardText>
            </Card>
          </div>
          <div className="pure-u-1-1 pure-u-lg-12-24 box">
            <Card>
              <CardMedia>
                <img src={Image} alt="Карта Проезда" />
              </CardMedia>
              <CardTitle title="News Title" subtitle="News subtitle" />
              <CardText>
                {placeholder}
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
