import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import { Project } from './types';

function App() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const [showProjectDetails, setShowProjectDetails] = useState(false);

    // While resizing the window, the project panel kind of peaks from the side
    // due to the transition propery, so we separately change it's visibility to
    // hidden while it's not open
    const [projectDetailsHidden, setProjectDetailsHidden] = useState(true);

    function onProjectSelected(project: Project) {
        setSelectedProject(project);
        setShowProjectDetails(true);
        setProjectDetailsHidden(false);
    }

    function closeProjectDetails() {
        setShowProjectDetails(false);
        setTimeout(() => setProjectDetailsHidden(true), 310);
    }

    return (
        <>
            <Navbar onLinkClicked={closeProjectDetails} />
            <Hero />
            <Projects onProjectSelected={onProjectSelected} />
            <CV />
            <Contact />
            <Footer />

            <ProjectDetails
                project={selectedProject}
                show={showProjectDetails}
                visibilityHidden={projectDetailsHidden}
                onClose={closeProjectDetails}
            />
        </>
    );
}

export default App;
