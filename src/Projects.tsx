import { projects } from './content';
import ProjectItem from './ProjectItem';

export default function Projects() {
    console.log(projects);
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="grid">
                <>
                    {projects.map((project) => (
                        <ProjectItem key={project.title} project={project} />
                    ))}
                </>
            </div>
        </section>
    );
}
