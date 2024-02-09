import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { faTemperatureLow, faTemperatureHigh, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  //Dados da precisão do tempo recebidos pelo componente pai
@Input() weatherDatasInput!: WeatherDatas;

minTemperatureIcon = faTemperatureLow;
maxTemperatureIcon = faTemperatureHigh;
humidityIcon = faDroplet;
windIcon = faWind;

}
