import React from 'react';
import Slider from 'react-slick';
import head from 'lodash/head';
import round from 'lodash/round';
import startCase from 'lodash/startCase';
import upperCase from 'lodash/upperCase';
import map from'lodash/map';

import { 
    Card, 
    CardWeatherIconContainer, 
    CardWeatherIcon, 
    CardWeatherDetails,
    CardTemperature,
    CardDescNameContainer,
    CardDescription,
    CardCountryName,
    CardWindDetails,
    RefreshButton,
    CardDateContainer,
    CardMonth,
    CardDay,
    WindSpeed,
    Humidity,
    CloudPercentage
} from './../styled';
import { iconMapper } from './../constants/weather.constant';

const settingsForCard = {
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots custom-slick-dots'
}

const WeatherCard = (props) => {
    const { weather, main, name, dt, onRefreshClick, wind: { speed }, clouds: { all } } = props;

    const { icon, description } = head(weather);
    console.log(props);

    return (
        <Card>
            <Slider {...settingsForCard}>
                {/** Iterating on same as not enough data points and design limitations to show different weather data */}
                {map([undefined, undefined, undefined], (value, index) => {
                    return <CardWeatherIconContainer key={index}>
                    <CardWeatherIcon className={`fas fa-${iconMapper[icon]}`}></CardWeatherIcon>
                    <RefreshButton onClick={() => onRefreshClick(name)} className="fa fa-redo"></RefreshButton>
                    <CardWeatherDetails name={name}>
                        <CardTemperature>
                            {round(main.temp)}&#176;
                        </CardTemperature>
                        <CardDescNameContainer>
                            <CardDescription>{startCase(description)}</CardDescription>
                            <CardCountryName>{name}</CardCountryName>
                        </CardDescNameContainer>
                         <CardDateContainer>
                            <CardMonth>
                                {upperCase(new Date(dt * 1000).toLocaleString("en-us", { month: "short" }))}
                            </CardMonth>
                            <CardDay>
                                {new Date(dt * 1000).getDate()}
                            </CardDay>
                        </CardDateContainer>
                    </CardWeatherDetails>
                    <CardWindDetails>
                        <WindSpeed>
                            <i className="fas fa-wind"></i>
                            <span style={{ marginLeft: '9px' }}>
                                {speed}
                                <span style={{ marginLeft: '4px' }}>MPC</span>
                            </span>
                        </WindSpeed>
                        <Humidity>
                            <i className="fas fa-tint"></i>
                            <span style={{ marginLeft: '9px' }}>
                                {main.humidity}%
                            </span>
                        </Humidity>
                        <CloudPercentage>
                            <i class="fas fa-poo-storm"></i>
                            <span style={{ marginLeft: '9px' }}>{all}%</span>
                        </CloudPercentage>
                    </CardWindDetails>
                </CardWeatherIconContainer>;
                }) }
            </Slider>
        </Card>
    )
};

export default WeatherCard;