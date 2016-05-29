import React from 'react';

import PortfolioItem from 'components/PortfolioItem';
import Spartak from './spartak.png';
import Cska from './cska.png';
import Zenit from './zenit.png';
import Dinamo from './dinamo.png';
import Tee from './cskatee.jpg';
import Truhani from './truhani.png';
import Hat from './cskahat.jpg';

class Portfolio extends React.Component {
  render() {
    const items = this.props.location.query.brand
      ? [
        { id: 0, name: 'Футболка', type: 'ЦСКА', image: Tee },
        { id: 1, name: 'Кепка', type: 'ЦСКА', image: Hat },
        { id: 2, name: 'Труханы', type: 'ЦСКА', image: Truhani },
        { id: 3, name: 'Футболка', type: 'ЦСКА', image: Tee },
        { id: 4, name: 'Кепка', type: 'ЦСКА', image: Hat },
        { id: 5, name: 'Труханы', type: 'ЦСКА', image: Truhani },
        { id: 6, name: 'Футболка', type: 'ЦСКА', image: Tee },
        { id: 7, name: 'Кепка', type: 'ЦСКА', image: Hat },
      ]
      : [
        { id: 0, name: 'Цска', type: 'Клуб', image: Cska },
        { id: 1, name: 'Зенит', type: 'Клуб', image: Zenit },
        { id: 2, name: 'Динамо', type: 'Клуб', image: Dinamo },
        { id: 3, name: 'Спартак', type: 'Клуб', image: Spartak },
      ];
    const filtered = this.props.location.query.brand;
    return (
      <div className="pure-g">
        <div className="pure-u-1-24 pure-u-sm-2-24 pure-u-lg-3-24"></div>
        <div className="pure-u-22-24 pure-u-sm-20-24 pure-u-lg-18-24">
          <div className="box"><div><h1>Портфолио</h1></div></div>
          {items.map((item) =>
            <PortfolioItem
              handleItemClick={this.props.changeRoute.bind(this, !filtered ? '/portfolio' : `/portfolio/${item.id}`, !filtered ? { brand: item.name } : undefined, !filtered ? undefined : item)}
              image={item.image}
              name={item.name}
              type={item.type}
              key={item.id}
            />
          )}
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  changeRoute: React.PropTypes.func,
  location: React.PropTypes.object.isRequired,
};

export default Portfolio;
