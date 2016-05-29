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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tortor sapien. Etiam et risus ut lorem venenatis placerat. Cras congue augue eget ex laoreet cursus. Etiam eu imperdiet neque. Duis malesuada quam eu ex egestas elementum. Integer eget tincidunt risus. Vivamus gravida, mi a maximus feugiat, odio tellus sagittis mauris, tincidunt aliquam nisl nisl semper tortor. Aenean posuere, orci in malesuada consequat, lacus leo porta ex, accumsan laoreet lectus libero vulputate ex. Nunc pellentesque, velit sed eleifend vestibulum, turpis nisi aliquam arcu, in imperdiet felis ante eget quam. In magna elit, laoreet id purus at, semper pulvinar turpis. Phasellus dignissim condimentum erat. Sed lacinia bibendum ullamcorper.
              </CardText>
              <CardText>
                Donec ligula ex, bibendum a orci id, ullamcorper congue orci. Pellentesque mattis est sit amet est dignissim maximus. Phasellus mauris nulla, hendrerit sed dolor vel, feugiat porta urna. Vivamus tincidunt molestie augue quis rutrum. Fusce cursus tortor nec turpis sollicitudin, pharetra facilisis mi ornare. Pellentesque tellus libero, tempor vel convallis eget, convallis a nisl. Vivamus volutpat nibh orci, at tristique odio congue vel. Nam posuere purus eget sem porta, nec ultrices sapien iaculis. Vivamus arcu neque, accumsan et tristique sit amet, eleifend id turpis.
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
