import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectSettings } from '../../app/settingsSlice';
import InfoDisplay from '../../features/display/InfoDisplay';
import './information.css';

export const InformationDisplay = () => {
    const settings = useSelector(selectSettings);

    return (
        <div className="screen">
            <div className="container">
                <div className="infoCross">
                    <FontAwesomeIcon icon={faCross} />
                </div>
                <h1>Today's Service</h1>
                {settings.service ? <h2>{settings.service}</h2> : <span></span>}
                <InfoDisplay />
            </div>
        </div>
    );
}