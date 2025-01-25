interface Props {
    text: string;
    link?: string;
    small?: boolean;
}

export default function ArrowButton({ text, link = '#' }: Props) {
    return (
        <a href={link} className="arrow-button">
            {text}
            <div className="arrow"></div>
        </a>
    );
}
