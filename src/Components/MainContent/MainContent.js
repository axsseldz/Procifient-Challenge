import React, { useState } from 'react';
import './MainContent.css';

export default function MainContent({ icon, name, squareMeter, setSummary }) { // Function that returns the application Main Content
    const [state, setState] = useState(0)

    // Here we calculate the summary value depending on the Square Meter value
    const handleSubtraction = () => {
        setState(preVal => {
            return preVal - 1
        })
        setSummary(preVal => {
            return preVal - squareMeter
        })
    }


    // Here we calculate the summary value depending on the Square Meter value
    const handleAddition = () => {
        setState(preVal => {
            return preVal + 1
        })
        setSummary(preVal => {
            return preVal + squareMeter
        })
    }

    return (

        /*
        The main tag is in charge of storing
        the box with the product and the buttons
        */
        <main>
            <div className='mainContent-box'>
                <img src={icon} />
                <p className='mainContent-icon-description'>{name}</p>
            </div>
            <div className='mainContent-buttons'>
                <button
                    className='button-1'
                    onClick={handleSubtraction}
                >
                    -
                </button>
                <p className='number'>{state}</p>
                <button
                    className='button-2'
                    onClick={handleAddition}
                >
                    +
                </button>
            </div>
        </main>
    )
}