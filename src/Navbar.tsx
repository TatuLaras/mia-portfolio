import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        const links = document.querySelectorAll('nav .hamburger-menu a');
        links.forEach((link) => link.addEventListener('click', closeHambuger));

        return () => {
            window.removeEventListener('scroll', onScroll);
            links.forEach((link) =>
                link.removeEventListener('click', closeHambuger),
            );
        };
    }, []);

    const onScroll = () => {
        if (!navRef.current) return;

        if (window.scrollY > 100) navRef.current.classList.add('occlude');
        else navRef.current.classList.remove('occlude');
    };

    function closeHambuger() {
        setShowHamburger(false);
    }

    return (
        <nav ref={navRef}>
            <ul className="regular-menu">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li className="name">
                    <a href="#about">Mia Mäntylampi</a>
                </li>
                <li>
                    <a href="#cv">CV</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="hamburger-menu">
                <a href="#about" className="name">
                    Mia Mäntylampi
                </a>
                <div
                    className={`hamburger-button ${showHamburger ? 'x' : ''}`}
                    onClick={() => setShowHamburger((old) => !old)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={showHamburger ? 'show' : ''}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#cv">CV</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
