import React, { useEffect, useState } from 'react';
import map from 'lodash/map';
import findIndex from 'lodash/findIndex';

import WeatherCard from './components/WeatherCard';
import { WeatherContainer } from './../App.styled';
import { CardContainer } from './styled';

import { countries } from './constants/weather.constant';
import { weatherApi } from './services/api';

const WeatherCards = () => {
    const [countryWeatherList, setCountryWeatherList] = useState([]);

    useEffect(() => {
        const countryWeatherListPromises = map(countries, country => weatherApi(country));
        const allCountryWeatherList = async () => {
            const allResponse = await Promise.all(countryWeatherListPromises);
            setCountryWeatherList(allResponse);
        };

        allCountryWeatherList();
    },[]);

    const onRefreshClick = (name) => {
        const countryWeatherListFunc = async () => {
            const countryWeatherResponse = await weatherApi(name);
            const findIndexofReqCountry = findIndex(countryWeatherList, { name });

            const initialWeatherList = [...countryWeatherList];
            initialWeatherList[findIndexofReqCountry] = countryWeatherResponse;

            setCountryWeatherList(initialWeatherList);
        }

        countryWeatherListFunc();
    }

    return (
        <WeatherContainer>
            <CardContainer>
                {map(countryWeatherList, (details, index) => {
                    return <WeatherCard key={index} {...details} onRefreshClick={onRefreshClick}/>
                })}
            </CardContainer>
        </WeatherContainer>
    );
};

export default WeatherCards;