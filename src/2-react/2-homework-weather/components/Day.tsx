import React, { FC } from 'react';
import { formatDate, formatDayName } from '../helpers/formatDate';

interface DayProps {
    rainProbability: number;
    humidity: number;
    date: number;
    temperature: number;
    type: string;
}

export const Day: FC<DayProps> = (props) => {
    const { rainProbability, humidity, date, temperature, type } = props;
    return (
        <>
            <div className='head'>
                <div className={`icon ${type}`} />
                <div className='current-date'>
                    <p>{formatDayName(date)}</p>
                    <span>{formatDate(date)}</span>
                </div>
            </div>

            <div className='current-weather'>
                <p className='temperature'>{temperature}</p>
                <p className='meta'>
                    <span className='rainy'>{`%${rainProbability}`}</span>
                    <span className='humidity'>{`%${humidity}`}</span>
                </p>
            </div>
        </>
    );
};
