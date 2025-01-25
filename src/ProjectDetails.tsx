import Images from './Images';
import { Project } from './types';

interface Props {
    project: Project | null;
    show?: boolean;
    onClose?: () => void;
    visibilityHidden?: boolean;
}

export default function ProjectDetails({
    project,
    show = false,
    onClose = () => {},
    visibilityHidden = false,
}: Props) {
    return (
        <div
            id="project-details"
            className={show ? 'show' : ''}
            style={visibilityHidden ? { visibility: 'hidden' } : {}}
        >
            {project && (
                <>
                    <div className="details">
                        <div className="start">
                            <h1>{project.title}</h1>
                            <div className="description">
                                {project.description}
                            </div>
                        </div>
                        <img
                            src="/images/arrow_left.png"
                            alt="Left arrow, back button"
                            className="back-button"
                            onClick={onClose}
                        />
                    </div>
                    <Images
                        mainImage={project.mainImage}
                        otherImages={project.otherImages}
                    />
                </>
            )}
        </div>
    );
}
