import { useEffect, useRef, useState } from 'react';

interface Props {
    mainImage: string;
    otherImages: string[];
}

export default function Images({ mainImage, otherImages }: Props) {
    const [mainImageAspectRatio, setMainImageAspectRatio] = useState(1);
    const [mainImageSrc, setMainImageSrc] = useState('');

    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const [otherImagesOverflowing, setOtherImagesOverflowing] = useState(true);

    const [atScrollStart, setAtScrollStart] = useState(true);
    const [atScrollEnd, setAtScrollEnd] = useState(false);

    useEffect(() => {
        // Find out and store image aspect ratio so we can preserve it when
        // switching from image to another
        const img = new Image();
        img.onload = (e: any) =>
            setMainImageAspectRatio(
                Math.max(1.4, e.target.naturalWidth / e.target.naturalHeight),
            );

        img.src = mainImage;
        setMainImageSrc(mainImage);
    }, [mainImage]);

    useEffect(() => {
        window.addEventListener('resize', checkImageBounds);
        return () => window.removeEventListener('resize', checkImageBounds);
    }, []);

    // useEffect(() => {
    //     checkImageBounds();
    //     checkImageBounds();
    // }, [otherImages, mainImage]);

    function checkImageBounds() {
        if (!imageContainerRef.current) return;

        setOtherImagesOverflowing(
            imageContainerRef.current.clientWidth <
                imageContainerRef.current.scrollWidth,
        );

        const scrollRight =
            imageContainerRef.current.scrollWidth -
            (imageContainerRef.current.scrollLeft +
                imageContainerRef.current.clientWidth);

        setAtScrollStart(imageContainerRef.current.scrollLeft <= 0);
        setAtScrollEnd(scrollRight <= 0);
    }

    function scrollImages(left: boolean = false) {
        if (!imageContainerRef.current) return;

        const scrollLeft =
            imageContainerRef.current.scrollLeft +
            imageContainerRef.current.clientWidth * 0.5 * (left ? -1 : 1);

        imageContainerRef.current.scrollLeft = scrollLeft;

        const scrollRight =
            imageContainerRef.current.scrollWidth -
            (scrollLeft + imageContainerRef.current.clientWidth);

        setAtScrollStart(scrollLeft <= 0);
        setAtScrollEnd(scrollRight <= 0);
    }

    const showScrollLeftButton = otherImagesOverflowing && !atScrollStart;
    const showScrollRightButton = otherImagesOverflowing && !atScrollEnd;

    return (
        <div className="images">
            <img
                src={mainImageSrc}
                alt="Project showcase image, main"
                loading="eager"
                style={{ aspectRatio: mainImageAspectRatio }}
            />
            <div
                className="other-images"
                style={otherImages.length == 0 ? { display: 'none' } : {}}
            >
                <div
                    className={`scroll-button next ${showScrollRightButton ? 'show' : ''}`}
                    onClick={() => scrollImages()}
                >
                    <img
                        src="/images/pointer_left.png"
                        alt="Pointer arrow left"
                    />
                </div>
                <div
                    className={`scroll-button previous ${showScrollLeftButton ? 'show' : ''}`}
                    onClick={() => scrollImages(true)}
                >
                    <img
                        src="/images/pointer_left.png"
                        alt="Pointer arrow left"
                    />
                </div>

                <div className="image-container" ref={imageContainerRef}>
                    <img
                        src={mainImage}
                        alt="Project showcase image, main"
                        loading="eager"
                        onClick={() => setMainImageSrc(mainImage)}
                        className={mainImage == mainImageSrc ? '' : 'dim'}
                    />

                    {otherImages.map((src) => (
                        <img
                            key={src}
                            src={src}
                            onClick={() => setMainImageSrc(src)}
                            loading="eager"
                            alt="Project showcase image, auxilliary"
                            className={src == mainImageSrc ? '' : 'dim'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
