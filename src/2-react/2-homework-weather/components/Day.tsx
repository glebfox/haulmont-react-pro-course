import React, { FC } from 'react';
import { formatDayName } from '../helpers/formatDate';

interface DayProps {
    id: string;
    date: number;
    temperature: number;
    type: string;
    selected: boolean;
    handleDaySelect: (id: string) => void;
}

const Day: FC<DayProps> = (props) => {
    const { id, date, temperature, type, selected, handleDaySelect } = props;

    return (
        <div className={`day ${type}${selected ? ' selected' : ''}`} onClick={() => handleDaySelect(id)}>
            <p>{formatDayName(date)}</p>
            <span>{temperature}</span>
        </div>
    );
};

export default Day;
