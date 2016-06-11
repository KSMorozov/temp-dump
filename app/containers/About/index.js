import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class About extends React.Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-24 pure-u-sm-2-24 pure-u-lg-3-24"></div>
        <div className="pure-u-22-24 pure-u-sm-20-24 pure-u-lg-18-24">
          <div className="box"><div><h1>О нас</h1></div></div>
          <div className="pure-u-1-1 box">
            <Card>
              <CardTitle title="Лига Звезд" subtitle="О Нашей Компании" />
              <CardText>
                Наша компания основана в 2002 году и первым проектом был выпуск коллекционных фигурок российских и иностранных спортсменов. В дальнейшем мы расширили ассортимент сувенирной продукции и начали выпускать брелоки, значки, вымпелы, шарфы, бейсболки, футболки, спортивные костюмы, толстовки для спортивных клубов, сообществ, спортшкол и болельщиков, а в 2012 году начали выпуск клубных пуховиков. Наша продукция отличается высоким качеством и низкой ценой. Самыми крупными коммерческими проектами компании является сотрудничество с такими организациями, как Олимпийский комитет России, BOSCO SPORT, Мегафон, МТС, Спортмастер.
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
