import React, { FC } from 'react';
import { WeatherModel } from '../types/WeatherModel';
import { DayShort } from './DayShort';

interface ForecastProps {
    forecast?: WeatherModel[];
    selectedDayId: string | null;
    handleDaySelect: (id: string) => void;
}

export const Forecast: FC<ForecastProps> = ({ forecast, selectedDayId, handleDaySelect }) => {
    const daysJSX = forecast?.map((weatherInfo) => {
        return (
            <DayShort
                key={weatherInfo.id}
                id={weatherInfo.id}
                date={weatherInfo.day}
                temperature={weatherInfo.temperature}
                type={weatherInfo.type}
                selected={weatherInfo.id === selectedDayId}
                handleDaySelect={handleDaySelect}
            />
        );
    });

    return <div className='forecast'>{daysJSX}</div>;
};
