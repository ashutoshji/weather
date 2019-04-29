import axios from 'axios';

export const weatherApi = (country) => {
    return new Promise((resolve, reject) => {
            return axios({
                method: 'GET',
                url: `https://community-open-weather-map.p.rapidapi.com/weather?q=${country}&units=metric`,
                headers: {
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                    'X-RapidAPI-Key': '4f0f973c6cmshacf72322280df68p1ee165jsn1c18ab3c538b'
                }
            }).then(response => {
                resolve(response.data)
            }).catch(error => {
                console.log(error);
                reject(error);
            });
    });
}