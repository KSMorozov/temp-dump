import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Product extends React.Component {
  render() {
    const product = this.props.location.state;
    return (
      <div className="pure-g">
        <div className="pure-u-1-24 pure-u-sm-2-24 pure-u-lg-3-24"></div>
        <div className="pure-u-22-24 pure-u-sm-20-24 pure-u-lg-18-24">
          <div className="box"><div><h1>{product.name}</h1></div></div>
          <div className="pure-u-1-1 pure-u-lg-1-2 box">
            <Card>
              <CardMedia>
                <img src={product.image} alt={`${product.name} ${product.type}`} />
              </CardMedia>
            </Card>
          </div>
          <div className="pure-u-1-1 pure-u-lg-1-2 box">
            <Card>
              <CardTitle title={product.name} subtitle={product.type} />
              <CardText>
                {product.body}
              </CardText>
              <CardText>
                Цена: {product.price} Рублей
              </CardText>
              <CardActions>
                <RaisedButton secondary label="Купить" style={{ borderRadius: '0px' }} />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
