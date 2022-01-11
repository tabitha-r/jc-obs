import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTime } from '../../app/settingsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const TimeForm = () => {
    const dispatch = useDispatch();
    const [time, setTime] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeTime(time));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="timeSelect">
                    <FontAwesomeIcon icon={faClock} className="icon" />
                    Time
                </label>
                <br />
                <input 
                    type="time"
                    id="timeSelect"
                    value={time}
                    onChange={(e) => setTime(e.currentTarget.value)}
                />
                <br />
                <button>Change Time</button>
            </form>
        </div>
    )
};