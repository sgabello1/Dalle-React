import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <p>Where: {weatherData.name} {weatherData.sys.country}, {weatherData.weather[0].main}, Temperature: {weatherData.main.temp} &deg;C ,
        Date: {moment().format('dddd')} , {moment().format('LL')}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;