import React from 'react';
import './settings.css';
import CurrentInformation from '../../features/settings/CurrentInformation';
import { SetDateForm } from './SetDateForm';
import { TimeForm } from './timeForm';
import { NameForm } from './nameForm';
import { LocationForm } from './locationForm';
import { CelebrantForm } from './celebrantsForm';

export const Settings = () => {
    return (
        <div className="settingsDialog">
            <h2>Information Settings</h2>
            <div className="current-info">
                <h3>Current Information</h3>
                <CurrentInformation />
            </div>
                <br />
                <div className="forms">
                <SetDateForm />
                <br />
                <TimeForm />
                <br />
                <NameForm />
                <br />
                <LocationForm />
                <br />
                <CelebrantForm />
            </div>
        </div>
    )
}