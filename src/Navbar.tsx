import { useEffect, useRef, useState } from 'react';

interface Props {
    onLinkClicked?: () => void;
}

export default function Navbar({ onLinkClicked = () => {} }: Props) {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        const links = document.querySelectorAll('nav a');
        links.forEach((link) =>
            link.addEventListener('click', onNavbarLinkClicked),
        );

        return () => {
            window.removeEventListener('scroll', onScroll);
            links.forEach((link) =>
                link.removeEventListener('click', onNavbarLinkClicked),
            );
        };
    }, []);

    const onScroll = () => {
        if (!navRef.current) return;

        if (window.scrollY > 100) navRef.current.classList.add('occlude');
        else navRef.current.classList.remove('occlude');
    };

    function onNavbarLinkClicked() {
        setShowHamburger(false);
        onLinkClicked();
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
