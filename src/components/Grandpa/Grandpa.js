import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Diamond')

const Grandpa = () => {
    return (
        <RingContext.Provider value='Diamond Ring'>
            <div>
                <h2>Grandpa</h2>
                <div className='grandpa' style={{ 'display': 'flex', 'justify-content': 'center' }}>
                    <Father></Father>
                    <Uncle></Uncle>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;