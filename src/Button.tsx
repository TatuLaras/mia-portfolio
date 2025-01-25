interface Props {
    text: string;
    link?: string;
    small?: boolean;
}

export default function Button({ text, link = '#', small = false }: Props) {
    return (
        <a href={link} className={`button ${small ? 'small-text' : ''}`}>
            {text}
        </a>
    );
}
