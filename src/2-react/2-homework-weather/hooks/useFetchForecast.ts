import { api } from '../api';
import { useQuery } from 'react-query';
import { WeatherModel } from '../types/WeatherModel';

export const useFetchForecast = (limit: number = 0) => {
    return useQuery<WeatherModel[]>(
        ['forecast', limit],
        async () => {
            return api.getForecast(limit);
        },
        {
            cacheTime: 1000,
        },
    );
};
