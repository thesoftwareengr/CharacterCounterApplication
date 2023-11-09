import { useState } from 'react'
import '../CSS/main.css'

import logoImage from '../images/White-The-Angkols-Logo.png';

function CharCounter() {

    const [phrase, setPhrase] = useState('');
    const [counter, setCounter] = useState(0);

    const handleEvent = (e) => {
        const inputText = e.target.value;
        // const filteredText = inputText.replace(/[\s\W_]/g, '');

        setPhrase(inputText);
        setCounter(inputText.length);
    }

    return (
        
        <div>
            <header>
                <img src={logoImage} className='logo' alt="Movie Seats" />
                <h2 className='app-title'>Character Counter Application</h2>
            </header>
            <div className='container'>
                <textarea 
                    className='input-textarea' value={phrase}
                    onChange={handleEvent}>
                </textarea>
            </div>
            <div className='counter-container'>
                <h2 className='counter-label'>Character Count:</h2>
                <h2 className='counter-num'>{counter}</h2>
            </div>   
        </div>
    )
}
export default CharCounter;