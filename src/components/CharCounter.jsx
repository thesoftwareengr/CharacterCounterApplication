import { useState, useEffect } from 'react'
import '../CSS/main.css'

import logoImage from '../images/White-The-Angkols-Logo.png';
import backgroundImage from '../images/Purple-Mountain-Background.png';

function CharCounter() {

    const [phrase, setPhrase] = useState('');
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        function stars() {
            const count = 70;
            const section = document.querySelector('section');
            var i = 1;
        
             while (i < count){
                const star = document.createElement('i');
                const x = Math.floor(Math.random() * window.innerWidth -20)
                const y = Math.floor(Math.random() * window.innerHeight - 220)
        
                const size = Math.random() * 4;
                star.style.left = x + 'px';
                star.style.top = y + 'px';
                star.style.width = 1 + size + 'px';
                star.style.height = 1 + size + 'px';

                const duration = Math.random() * 2;

                star.style.animationDuration = 6 + duration + 's';
                star.style.animationDelay = duration + 's';
        
                section.appendChild(star); 
                i++
            }
        }
        stars();
    }, []);

    const handleEvent = (e) => {
        const inputText = e.target.value;
        // const filteredText = inputText.replace(/[\s\W_]/g, '');

        setPhrase(inputText);
        setCounter(inputText.length);
    }

    return (
        
        <div>
            <section>
                <img src={backgroundImage} className='background-image' alt="Background" />
                <header>
                    <img src={logoImage} className='logo' alt="Logo" />
                    <h2 className='app-title'>Character Counter Application</h2>
                </header>
                <div className='container'>
                    <textarea 
                        className='input-textarea' value={phrase}
                        onChange={handleEvent}
                        placeholder='You can express anything in this field'
                        spellCheck='false'>
                    </textarea>
                </div>
                <div className='counter-container'>
                    <h2 className='counter-label'>Character Count:</h2>
                    <h2 className='counter-num'>{counter}</h2>
                </div> 
            </section>
        </div>
    )
}
export default CharCounter;