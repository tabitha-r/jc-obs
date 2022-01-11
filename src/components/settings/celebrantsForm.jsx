import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings, addCelebrant, removeCelebrant } from '../../app/settingsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { store } from '../../app/store';

export const CelebrantForm = () => {
    const dispatch = useDispatch();
    const settings = useSelector(selectSettings);
    const [newCelebrant, setNewCelebrant] = useState('');
    console.log(store.getState());

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCelebrant(newCelebrant));
        setNewCelebrant('');
    }

    const handleRemove = (person) => {
        console.log(person);
        dispatch(removeCelebrant(person));
    }

    return (
        <div>
            <div className="addedCelebrants">
                <h3>Celebrant(s)</h3>
                {settings.celebrants.map((person, index) => (
                    <div key={index} className="celebrant">
                        <label htmlFor={index}>{person}</label>
                        <button 
                            onClick={() => handleRemove(person)}
                            id={index}
                            className="addRemoveButton"
                        >
                            <FontAwesomeIcon icon={faUserMinus}  />
                        </button>
                    </div>
                ))}
            </div>
            <br />
            <form>
                <label htmlFor="addCelebrant">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    New Celebrant
                </label>
                <br />
                <input 
                    type="text"
                    id="addCelebrant"
                    value={newCelebrant}
                    onChange={(e) => setNewCelebrant(e.currentTarget.value)}
                    list="celebrants"
                />
                <datalist id="celebrants">
                    <option value="Revd Nick Wells" />
                    <option value="Revd Helen Houston" />
                    <option value="Revd Peter Law-Jones" />
                    <option value="Joanne Hutchinson, LLM" />
                    <option value="Angela Lee, LLM" />
                    <option value="David Matthews, LLM" />
                    <option value="Bev Wells, LLM" />
                    <option value="Nicola Whitehead, LLM" />
                </datalist>
                <button onClick={handleSubmit} className="addRemoveButton">
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            </form>
        </div>
    )
}