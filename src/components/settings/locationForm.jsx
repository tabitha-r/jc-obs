import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLocation } from '../../app/settingsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons';

export const LocationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeLocation());
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">
                    <FontAwesomeIcon icon={faChurch} className="icon" />
                    Location
                </label>
                <br />
                <button>Change Location</button>
            </form>
        </div>
    )
}