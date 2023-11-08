import { useState } from 'react'

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
            <textarea value={phrase}
                onChange={handleEvent}></textarea>
            <label>Characters: {counter}</label>
        </div>
    )
}
export default CharCounter;