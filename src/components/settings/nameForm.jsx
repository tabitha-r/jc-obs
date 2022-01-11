import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeServiceName } from '../../app/settingsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBible } from '@fortawesome/free-solid-svg-icons';

export const NameForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeServiceName(name));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="serviceName">
                    <FontAwesomeIcon icon={faBible} className="icon" /> 
                    Service Name
                </label>
                <br />
                <input
                    type="text"
                    id="serviceName"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    list="services"
                />
                <datalist id="services">
                    <option value="Holy Communion" />
                    <option value="Service of the Word" />
                </datalist>
                <br />
                <button>Change Service Name</button>
            </form>
        </div>
    )
};