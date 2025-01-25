export interface Project {
    shortTitle: string;
    title: string;
    description: JSX.Element | string;
    thumb: string;
    mainImage: string;
    otherImages: string[];
}

export interface LinkProps {
    text: string;
    link?: string;
}
