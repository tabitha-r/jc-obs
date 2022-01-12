import React from 'react';
import { useSelector } from 'react-redux';
import { selectSettings } from '../../app/settingsSlice';
import { store } from '../../app/store';

const CurrentInformation = () => {
    const settings = useSelector(selectSettings);
    const location = settings.location ? 'St Cuthberts' : 'St John the Divine';
    const celebrantPlural = settings.celebrants.length < 2 ? 'Celebrant' : 'Celebrants';
    const formatCelebrants = (celebArray) => {
        const people = celebArray;
        if (people.length < 2) {
            return people.toString();
        } else if (people.length === 2) {
            return people.join(' & ');
        } else if (people.length > 2) {
            const lastPerson = people[people.length - 1];
            const stringMaker = people.slice(0,-1);
            const newString = [];
            newString.push(stringMaker.join('; '));
            newString.push('&');
            newString.push(lastPerson);
            console.log(newString);
            return newString.join(' ');
        }
    };
    const celebrants = formatCelebrants(settings.celebrants);

    return (
        <div>
            <p><strong>Date:</strong> {settings.date}</p>
            <p><strong>Time:</strong> {settings.time}</p>
            <p><strong>Service Name:</strong> {settings.service}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>{celebrantPlural}:</strong> {celebrants}</p>
        </div>
    );
};

export default CurrentInformation;