import { useEffect, useRef } from 'react';

export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onScroll = () => {
        if (!navRef.current) return;

        if (window.scrollY > 200) navRef.current.classList.add('occlude');
        else navRef.current.classList.remove('occlude');
    };

    return (
        <nav ref={navRef}>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li id="name">
                    <a href="#">Mia Mäntylampi</a>
                </li>
                <li>
                    <a href="#">CV</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
