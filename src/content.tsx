import Button from './Button';
import { Project } from './types';

export const projects: Project[] = [
    {
        shortTitle: 'Branding & Visual Identity',
        title: 'Branding & Visual Identity for a Fictional Company',
        description: (
            <>
                <p>
                    <b>Description:</b> A course project in which we designed a
                    brand and visual identity for a fictional company.
                </p>
                <p>
                    <Button
                        text="Download Brand Guide"
                        link="/downloadable/Sushi_Club_Brand_Manual_Mia_Mantylampi.pdf"
                        small
                    />
                </p>
            </>
        ),
        thumb: '/images/thumb/branding.jpg',
        mainImage: '/images/sushi_club_slogan_slide.jpg',
        otherImages: [
            '/images/Sushi_Club_Mockup_Compilement.jpg',
            '/images/menu_mockup.jpg',
            '/images/Free_Poster_Frame_Mockup_1.jpg',
        ],
    },
    {
        shortTitle: 'Tea Packaging',
        title: 'Tea Packaging',
        description: (
            <>
                <p>
                    <b>Description:</b> A course project in which we could
                    freely choose a concept to design a product for. I chose to
                    design a logo and a packaging label for a tea company. My
                    aim for this design was for it to feel cozy and inviting.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Bodoni MT
                    <br />
                    Urbanist
                </p>
            </>
        ),
        thumb: '/images/thumb/tea_thumb.jpg',
        mainImage: '/images/Cardboard_Tube_Mockup_5_16by9.jpg',
        otherImages: [
            '/images/packaging label design.png',
            '/images/Cardboard_Tube_Mockup_1_simple.jpg',
            '/images/Free_Pouch_Mockup_2.jpg',
        ],
    },
    {
        shortTitle: 'Editorial',
        title: 'Editorial Typography Layout',
        description: (
            <>
                <p>
                    <b>Description:</b> A two-page spread for a magazine
                    article. A course assignment focused on utilizing
                    hierarchical typography and creative typographic designs to
                    improve readability and capture visual interest.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Victor Mono
                    <br />
                    Cormorant Garamond
                </p>
            </>
        ),
        thumb: '/images/thumb/editorial.jpg',
        mainImage: '/images/Assignment 5_Editorial Typography Layout.jpg',
        otherImages: [],
    },
    {
        shortTitle: 'Creative Poster',
        title: 'Creative Poster',
        description: (
            <>
                <p>
                    <b>Description:</b>A poster made for a course assignment in
                    which we designed a poster based on an interest of ours.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Playfair Display
                </p>
            </>
        ),
        thumb: '/images/thumb/creative.jpg',
        mainImage:
            '/images/Assignment 0_ Create Your First Digital Design-01.jpg',
        otherImages: [],
    },
    {
        shortTitle: 'Promotional Flyer',
        title: 'Promotional Flyer',
        description: (
            <>
                <p>
                    <b>Description:</b>A promotional flyer made for a course
                    assignment in which we focused on effective use of imagery
                    and the balance between images and text.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Bodoni MT
                    <br />
                    WindSong
                </p>
            </>
        ),
        thumb: '/images/thumb/promotional.jpg',
        mainImage: '/images/Promotional Flyer Design.jpg',
        otherImages: [],
    },
    {
        shortTitle: 'Magazine Cover',
        title: 'Magazine Cover',
        description: (
            <>
                <p>
                    <b>Description:</b>A course assignment in which we designed
                    a magazine cover.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Casta
                    <br />
                    Readex Pro
                </p>
            </>
        ),
        thumb: '/images/thumb/magazine.jpg',
        mainImage: '/images/OM Uppg 3 - Magasinomslag.jpg',
        otherImages: [],
    },
    {
        shortTitle: 'UX/UI',
        title: 'UX and UI for an App',
        description: (
            <>
                <p>
                    <b>Description:</b>A course project in which we designed the
                    UX and UI for an app. I chose to design a library management
                    app.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Poltawski Nowy
                    <br />
                    Assistant
                </p>
            </>
        ),
        thumb: '/images/thumb/ui.jpg',
        mainImage: '/images/app/Android Medium - 1.jpg',
        otherImages: [
            '/images/app/Android Medium - 11.jpg',
            '/images/app/Android Medium - 12.jpg',
            '/images/app/Android Medium - 2.jpg',
            '/images/app/Android Medium - 31.jpg',
            '/images/app/Android Medium - 3.jpg',
            '/images/app/Android Medium - 5.jpg',
            '/images/app/Android Medium - 6.jpg',
            '/images/app/Android Medium - 7.jpg',
            '/images/app/Android Medium - 8.jpg',
        ],
    },
    {
        shortTitle: 'Illustrated Poster',
        title: 'Illustrated Poster',
        description: (
            <>
                <p>
                    <b>Description:</b>A poster made for a course assignment in
                    which we designed a poster for a fictional animated film,
                    focusing on the color balance and composition.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Cormorant Garamond
                </p>
            </>
        ),
        thumb: '/images/thumb/illustrated.jpg',
        mainImage: '/images/OM uppg 5 . Filmaffisch.jpg',
        otherImages: [],
    },
    {
        shortTitle: 'Logo',
        title: 'Logo',
        description: (
            <>
                <p>
                    <b>Description:</b>A course assignment in which we explored
                    typography in logos. I chose to design a logo for a film
                    magazine.
                </p>
                <p>
                    <b>Typefaces used:</b>
                    <br />
                    Yeseva One
                    <br />
                    Raleway
                </p>
            </>
        ),
        thumb: '/images/thumb/logo.jpg',
        mainImage:
            '/images/Assignment 6_Typography Exploration in Branding-03.jpg',
        otherImages: [],
    },
];
