import { Letter } from "./Letter";
export function Honeycomb({ centerLetter, outerLetters, validLetters 

}) {
    return (
        <article className="honeycomb">
            <Letter letter={centerLetter} isCenter={true} />
            <Letter letter={outerLetters[0]} isCenter={false} />
            <Letter letter={outerLetters[1]} isCenter={false} />
            <Letter letter={outerLetters[2]} isCenter={false} />
            <Letter letter={outerLetters[3]} isCenter={false} />
            <Letter letter={outerLetters[4]} isCenter={false} />
            <Letter letter={outerLetters[5]} isCenter={false} />
        </article>
    );
}