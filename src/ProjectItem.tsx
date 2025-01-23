import { CSSProperties } from 'react';
import { Project } from './types';

interface Props {
    project: Project;
}

export default function ProjectItem({ project }: Props) {
    return (
        <article className="project-item">
            <div
                className="bg"
                style={
                    { '--img': `url('${project.mainImage}')` } as CSSProperties
                }
            ></div>
            <h2>{project.title}</h2>
        </article>
    );
}
