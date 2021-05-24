import waait from 'waait';
import axios from 'axios';
import { WeatherModel } from '../types/WeatherModel';

const WEATHER_API_URL = `${process.env.REACT_APP_WEATHER_API_URL}/forecast`;

export const api = {
    async getForecast(limit: number = 0) {
        await waait(1000);

        const { data } = await axios.get<{ data: WeatherModel[] }>(
            `${WEATHER_API_URL}?limit=${limit}`
        );

        return data.data;
    },
};
