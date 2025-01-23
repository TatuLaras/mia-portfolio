import { LinkProps } from './types';

export default function Button({ text, link = '#' }: LinkProps) {
    return (
        <a href={link} className="button">
            {text}
        </a>
    );
}
