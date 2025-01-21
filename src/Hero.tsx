import { useEffect, useRef } from 'react';

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
        <header>
            <div className="bg" ref={bgRef}></div>
            <div className="content">
                <h1>Designer with focus withing layout and editorial.</h1>
                <a href="#" className="button primary">
                    Contact Me
                </a>
                <a href="#" id="see-projects">
                    See Portfolio
                    <div id="arrow"></div>
                </a>
            </div>
        </header>
    );
}
