import { useState } from 'react';
import { projects } from './content';
import ProjectDetails from './ProjectDetails';
import ProjectItem from './ProjectItem';
import { Project } from './types';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    const [showProjectDetails, setShowProjectDetails] = useState(false);

    // There's a separate projectDetailsHidden due to animation related stuff (we need to hide
    // the element separately from toggling the class that actually does to pop up animation).
    const [projectDetailsHidden, setProjectDetailsHidden] = useState(true);

    function onProjectClick(project: Project) {
        setSelectedProject(project);
        setShowProjectDetails(true);
        setProjectDetailsHidden(false);
    }

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="grid">
                <>
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                            onClick={() => onProjectClick(project)}
                            onMouseOver={() => setSelectedProject(project)}
                        />
                    ))}
                </>
            </div>
            <ProjectDetails
                project={selectedProject}
                show={showProjectDetails}
                visibilityHidden={projectDetailsHidden}
                onClose={() => {
                    setShowProjectDetails(false);
                    setTimeout(() => setProjectDetailsHidden(true), 310);
                }}
            />
        </section>
    );
}
