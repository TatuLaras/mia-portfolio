import { useEffect, useRef, useState } from 'react';

interface Props {
    mainImage: string;
    otherImages: string[];
}

export default function Images({ mainImage, otherImages }: Props) {
    const [mainImageAspectRatio, setMainImageAspectRatio] = useState(1);
    const [mainImageSrc, setMainImageSrc] = useState('');

    const otherImagesRef = useRef<HTMLDivElement | null>(null);
    const [_otherImagesOverflowing, setOtherImagesOverflowing] =
        useState(false);

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
        window.addEventListener('resize', onWindowResize);
        return () => window.removeEventListener('resize', onWindowResize);
    }, []);

    function onWindowResize() {
        if (!otherImagesRef.current) return;

        setOtherImagesOverflowing(
            otherImagesRef.current.clientWidth <
                otherImagesRef.current.scrollWidth,
        );
    }

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
                ref={otherImagesRef}
            >
                <div
                    className="scroll-button next"
                    onClick={() => {
                        if (!otherImagesRef.current) return;
                        otherImagesRef.current.scrollTo(
                            otherImagesRef.current.scrollLeft + 50,
                            0,
                        );
                    }}
                ></div>
                <div className="scroll-button previous"></div>

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
    );
}
