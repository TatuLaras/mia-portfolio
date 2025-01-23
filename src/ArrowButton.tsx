import { LinkProps } from './types';

export default function ArrowButton({ text, link = '#' }: LinkProps) {
    return (
        <a href={link} className="arrow-button">
            {text}
            <div className="arrow"></div>
        </a>
    );
}
