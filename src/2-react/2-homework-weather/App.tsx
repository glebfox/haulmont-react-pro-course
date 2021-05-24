import React, { useEffect, useState } from 'react';
import { Day, DayShort } from './components';
import { useWeather } from './hooks/useWeather';

export const App = () => {
    const [selectedDayId, setSelectedDayId] = useState<string | null>(null);
    const { data: forecast, isFetching } = useWeather(7);

    useEffect(() => {
        if (selectedDayId === null && forecast !== null && Array.isArray(forecast)) {
            setSelectedDayId(forecast[0].id);
        }
    }, [isFetching]);

    const handleDaySelect = (id: string): void => {
        setSelectedDayId(id);
    };

    const getSelectedDayJSX = () => {
        const dayInfo = forecast?.find((dayInfo) => {
            return dayInfo.id === selectedDayId;
        });

        if (dayInfo) {
            return (
                <Day
                    rainProbability={dayInfo.rainProbability}
                    humidity={dayInfo.humidity}
                    date={dayInfo.day}
                    temperature={dayInfo.temperature}
                    type={dayInfo.type}
                />
            );
        }
        return null;
    };

    const daysJSX = forecast?.map((dayInfo) => {
        return (
            <DayShort
                key={dayInfo.id}
                id={dayInfo.id}
                date={dayInfo.day}
                temperature={dayInfo.temperature}
                type={dayInfo.type}
                selected={dayInfo.id === selectedDayId}
                handleDaySelect={handleDaySelect}
            />
        );
    });

    return (
        <main>
            <div className='filter'>
                <span className='checkbox'>Облачно</span>
                <span className='checkbox selected'>Солнечно</span>
                <p className='custom-input'>
                    <label htmlFor='min-temperature'>Минимальная температура</label>
                    <input id='min-temperature' type='text' />
                </p>
                <p className='custom-input'>
                    <label htmlFor='min-temperature'>Максимальная температура</label>
                    <input id='max-temperature' type='text' />
                </p>
                <button>Отфильтровать</button>
            </div>

            {getSelectedDayJSX()}

            <div className='forecast'>
                {isFetching && <p>Загрузка...</p>}
                {!isFetching && daysJSX}
            </div>
        </main>
    );
};
