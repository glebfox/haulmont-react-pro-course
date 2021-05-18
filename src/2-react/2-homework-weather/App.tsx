import forecast from './mock-data/forecast.json';
import { useEffect, useState } from 'react';
import Day from './components/Day';
import DayFull from './components/DayFull';

export const App = () => {
    const [selectedDayId, setSelectedDayId] = useState<string | null>(null);

    useEffect(() => {
        if (selectedDayId === null && forecast !== null) {
            setSelectedDayId(forecast[0].id);
        }
    }, []);

    const handleDaySelect = (id: string): void => {
        setSelectedDayId(id);
    };

    const getSelectedDayJSX = () => {
        const dayInfo = forecast.find((dayInfo) => {
            return dayInfo.id === selectedDayId;
        });

        if (dayInfo) {
            return (
                <DayFull
                    rainProbability={dayInfo.rain_probability}
                    humidity={dayInfo.humidity}
                    date={dayInfo.day}
                    temperature={dayInfo.temperature}
                    type={dayInfo.type}
                />
            );
        }
        return null;
    };

    const daysJSX = forecast.slice(0, 7).map((dayInfo) => {
        return (
            <Day
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

            <div className='forecast'>{daysJSX}</div>
        </main>
    );
};
