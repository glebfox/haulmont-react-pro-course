import React, { useEffect, useState } from 'react';
import { Day, Filter, Forecast } from './components';
import { useFetchForecast } from './hooks/useFetchForecast';

export const App = () => {
    const [selectedDayId, setSelectedDayId] = useState<string | null>(null);
    const { data: forecast, isFetching } = useFetchForecast(7);

    useEffect(() => {
        if (selectedDayId === null && forecast !== null && Array.isArray(forecast)) {
            setSelectedDayId(forecast[0].id);
        }
    }, [isFetching]);

    const handleDaySelect = (id: string): void => {
        setSelectedDayId(id);
    };

    const getSelectedDayJSX = () => {
        const weatherInfo = forecast?.find((weatherInfo) => {
            return weatherInfo.id === selectedDayId;
        });

        if (weatherInfo) {
            return (
                <Day
                    rainProbability={weatherInfo.rain_probability}
                    humidity={weatherInfo.humidity}
                    date={weatherInfo.day}
                    temperature={weatherInfo.temperature}
                    type={weatherInfo.type}
                />
            );
        }

        return null;
    };

    return (
        <main>
            <Filter />

            {getSelectedDayJSX()}

            {isFetching && <p className='loading-indicator'>Загрузка...</p>}
            {!isFetching && (
                <Forecast forecast={forecast} selectedDayId={selectedDayId} handleDaySelect={handleDaySelect} />
            )}
        </main>
    );
};
