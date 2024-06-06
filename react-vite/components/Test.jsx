import { useState } from "react";
import "./Test.css"

export default function make_letters() {
    const [randomWords, setRandomWords] = useState([])
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const createRandomIdx = () => {
        const randomIdx = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIdx];
    }

    const createRandomWords = (count) => {
        const words = [];
        for (let i = 0; i < count; i++) {
            words.push(createRandomIdx());
        }
        return words;
    }

    useState(() => {
        setRandomWords(createRandomWords(6));
    }, [])

    return (
        // <div className='random'>{randomWords}</div>
        <div className="random">
            {randomWords.map((letter, index) => (
                <div key={index} className="box">{letter}</div>
            ))}
        </div>
    )
}



