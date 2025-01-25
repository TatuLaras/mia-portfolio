import { projects } from './content';
import ProjectItem from './ProjectItem';
import { Project } from './types';

interface Props {
    onProjectSelected: (project: Project) => void;
}

export default function Projects({ onProjectSelected = () => {} }: Props) {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="grid">
                <>
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                            onClick={() => onProjectSelected(project)}
                        />
                    ))}
                </>
            </div>
        </section>
    );
}
