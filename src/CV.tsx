import ArrowButton from './ArrowButton';
import Button from './Button';

export default function CV() {
    return (
        <section id="cv">
            <h1>CV</h1>
            <Button text="Download CV" link="/downloadable/cv_en.pdf" />
            <ArrowButton text="Contact me" link="#contact" />
        </section>
    );
}
