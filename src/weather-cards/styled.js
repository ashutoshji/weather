import styled from 'styled-components';

const mixin = () => {
    return {
        'color': '#FFFFFF',
        'font-size': '11px'
    }
}

export const CardContainer = styled.div`
    margin-top: 99px;
    margin-bottom: 101px;
    display: inline-flex;
`;

export const Card = styled.div`
    width: 315px;
    background: #FFFFFF;
    border-radius: 10px;
    &:nth-child(2) {
        margin: 0 50px;
    }
`;

export const CardWeatherIconContainer = styled.div`
    text-align: center;
`;

export const CardWeatherIcon = styled.i`
    font-size: 65px;
    margin-top: 83px;
    margin-bottom: 36px;
`;

export const CardWeatherDetails = styled.div`
    padding: 20px;
    background-color: ${props => props.name === 'Singapore' ? 
        '#1CC7D0' : props.name === 'India' ? '#FF6C5F' : '#2DDE98'}
    display: inline-flex;
    width: 100%;
    box-sizing: border-box;
`;

export const CardTemperature = styled.i`
    color: #FFFFFF;
    font-size: 42px;
`;

export const CardDescNameContainer = styled.div`
    margin-left: 17px;
`;

export const CardDateContainer = styled.div`
    margin-left: auto;
    border-left: 1px solid rgb(0, 0, 0, 0.2);
    padding-left: 19px;
`;

export const CardMonth = styled.div`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 11px;
`;

export const CardDay = styled.div`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 30px;
`;

export const CardDescription = styled.div`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 20px;
    margin-top: 10px;
`;

export const CardCountryName = styled.div`
    font-size: 11px;
    color: #FFFFFF;
    text-align: left;
`;

export const CardWindDetails = styled.div`
    padding: 30px 40px 60px 40px;
    background-color: #2E3335;
    display: inline-flex;
    width: 100%;
    box-sizing: border-box;
`;

export const RefreshButton = styled.i`
    position: absolute;
    margin-left: 80px;
    margin-top: 15px;
    cursor: pointer;
`;

export const WindSpeed = styled.div`
    ${mixin()}
    margin-right: 15px;
`;

export const Humidity = styled.div`
    ${mixin()}
    margin: 0 auto;
`;

export const CloudPercentage = styled.div`
    ${mixin()}
    margin-left: auto;
`;