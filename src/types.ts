export interface Project {
    title: string;
    description: JSX.Element | string;
    mainImage: string;
    otherImages: string[];
}

export interface LinkProps {
    text: string;
    link?: string;
}
