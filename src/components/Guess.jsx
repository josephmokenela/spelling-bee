export function Guess({ guess }) {
    return (
        <section className="guess">
            <p className="guess-letter">
                { guess }
            </p>
        </section>
    );
}