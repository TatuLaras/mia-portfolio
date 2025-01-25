import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onScroll = () => {
        if (!navRef.current) return;

        if (window.scrollY > 100) navRef.current.classList.add('occlude');
        else navRef.current.classList.remove('occlude');
    };

    return (
        <nav ref={navRef}>
            <ul className="regular-menu">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li className="name">
                    <a href="#">Mia Mäntylampi</a>
                </li>
                <li>
                    <a href="#">CV</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div className="hamburger-menu">
                <a href="#" className="name">
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
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">CV</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
