export function Guess({ guess, centerLetter, outerLetters }) {
    return (
        <section className="guess">
            <p className="guess-letters">
                { guess.split('').map((letter, index) => {
                    return <b key={index} 
                    className={"guess-letters" + (letter === centerLetter ? 
                        " guess-center": outerLetters.includes(letter) ?
                        " guess-outer" : null)}>{letter}</b>
                }) }
            </p>
        </section>
    );
}