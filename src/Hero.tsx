import { useEffect, useRef } from 'react';
import ArrowButton from './ArrowButton';
import Button from './Button';

export default function Hero() {
    const bgRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onScroll = () => {
        if (!bgRef.current) return;

        if (window.scrollY > 200) bgRef.current.classList.add('zoom');
        else bgRef.current.classList.remove('zoom');
    };

    return (
        <header id="about">
            <div className="bg" ref={bgRef}></div>
            <div className="content">
                <h1>Designer with focus withing layout and editorial.</h1>
                <Button text="Contact Me" link="#contact"></Button>
                <ArrowButton text="See Portfolio" link="#projects" />
            </div>
        </header>
    );
}
