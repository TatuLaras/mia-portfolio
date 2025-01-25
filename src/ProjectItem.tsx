import { CSSProperties } from 'react';
import { Project } from './types';

interface Props {
    project: Project;
    onClick: () => void;
    onMouseOver?: () => void;
}

export default function ProjectItem({
    project,
    onClick,
    onMouseOver = () => {},
}: Props) {
    return (
        <article
            className="project-item"
            onClick={onClick}
            onMouseOver={onMouseOver}
        >
            <div
                className="bg"
                style={{ '--img': `url('${project.thumb}')` } as CSSProperties}
            ></div>
            <h2>{project.shortTitle}</h2>
        </article>
    );
}
