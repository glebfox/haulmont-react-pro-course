import { api } from '../api';
import { useQuery } from 'react-query';
import { WeatherModel } from '../types/WeatherModel';

export const useWeather = (limit: number = 0) => {
    const query = useQuery<WeatherModel[]>(
        ['forecast', limit],
        async () => {
            return api.getWeather(limit);
        },
        {
            cacheTime: 1000,
        },
    );

    return query;
};
