import ArrowButton from './ArrowButton';
import Button from './Button';

export default function CV() {
    return (
        <section id="cv">
            <h1>CV</h1>
            <Button text="Download CV" />
            <ArrowButton text="Contact me" link="#contact" />
        </section>
    );
}
