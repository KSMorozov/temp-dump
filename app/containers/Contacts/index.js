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
              <CardTitle title="Контактные данные" subtitle="Телефоны, график работы и местонахождение офиса:" />
              <CardText>
                <p>Aдресс: 107113 г. Москва, Сокольнический вал, д. 1Б, (Ледовый дворец «Сокольники»)</p>
                <p>Tел/факс: +7 (499) 268-00-78</p>
                <p>E-mail: <a href="mailto:info@ligazvezd.com">info@ligazvezd.com</a></p>
                <p>Время работы офиса: С понедельника по пятницу с 10.00 до 17.00</p>
              </CardText>
              <CardTitle title="Проезд на общественном транспорте" subtitle="Как к нам добраться:" />
              <CardText>
                <p> Проезд до станции метро Сокольники, один выход в город, идём по направлению к центральному входу парка «Сокольники», переходим дорогу со светофором и поворачиваем налево, идём до Ледового Дворца Спорта «Сокольники», который располагается по правой стороне. Далее идём к тренировочному катку, вход в центральной части здания. Общее время в пути 10-15 минут.</p>
              </CardText>
              <CardTitle title="Убебительная просьба: звонить перед приездом." />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
