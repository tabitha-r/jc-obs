import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../app/settingsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

export const SetDateForm = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeDate(date));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="specifyDate">
                    <FontAwesomeIcon icon={faCalendarDay} className="icon" />
                    Date
                </label>
                <br />
                <input 
                    type="date"
                    id="specifyDate"
                    value={date}
                    onChange={(e) => setDate(e.currentTarget.value)}
                />
                <br />
                <button>Change Date</button>
        </form>
        </div>
    )
};
