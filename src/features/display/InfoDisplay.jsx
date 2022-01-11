import React from 'react';
import { useSelector } from 'react-redux';
import { selectSettings } from '../../app/settingsSlice';

const InfoDisplay = () => {
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
            const stringMaker = people;
            stringMaker.slice(-1);
            const newString = [];
            newString.push(stringMaker.join('; '));
            newString.push('&');
            newString.push(lastPerson);
            console.log(newString);
            return newString.join(' ');
        }
    };
    const celebrants = formatCelebrants(settings.celebrants);
    const date = new Date(settings.date);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(date);

    return (
        <div className="serviceInfo">
            <p>{settings.service ? 'from' : 'A service from'} {location}, Lytham</p>
            {settings.time ? <p>{formatDate} | {settings.time}</p> : <p>{formatDate}</p>}
            {settings.celebrants ? <div className="celebrantsDisplay">
                    <p><strong>{celebrantPlural}</strong></p>
                    <p>{celebrants}</p>
                </div> : <span></span>}
        </div>
    );   
};

export default InfoDisplay;