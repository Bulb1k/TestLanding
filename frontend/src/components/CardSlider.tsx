import { useState, useEffect } from 'react';

interface CardSliderProps {
    children: React.ReactNode[];
    itemsPerSlide?: {
        mobile: number;
        tablet: number;
        desktop: number;
    };
    gap?: number;
}

const CardSlider: React.FC<CardSliderProps> = ({
                                                   children,
                                                   itemsPerSlide = { mobile: 1, tablet: 2, desktop: 4 },
                                                   gap = 24
                                               }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(itemsPerSlide.mobile);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setItemsToShow(itemsPerSlide.desktop);
            } else if (width >= 640) {
                setItemsToShow(itemsPerSlide.tablet);
            } else {
                setItemsToShow(itemsPerSlide.mobile);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [itemsPerSlide]);

    const totalSlides = Math.ceil(children.length / itemsToShow);
    const canGoNext = currentIndex < totalSlides - 1;
    const canGoPrev = currentIndex > 0;

    const goToNext = () => {
        if (canGoNext) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const goToPrev = () => {
        if (canGoPrev) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="flex-shrink-0 w-full flex"
                            style={{ gap: `${gap}px` }}
                        >
                            {children.slice(
                                slideIndex * itemsToShow,
                                (slideIndex + 1) * itemsToShow
                            ).map((child, cardIndex) => (
                                <div
                                    key={cardIndex}
                                    style={{
                                        flex: `0 0 calc((100% - ${gap * (itemsToShow - 1)}px) / ${itemsToShow})`
                                    }}
                                >
                                    {child}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {totalSlides > 1 && (
                <>
                    <button
                        onClick={goToPrev}
                        disabled={!canGoPrev}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:hidden bg-white rounded-full p-2 shadow-lg ${
                            !canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={!canGoNext}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:hidden bg-white rounded-full p-2 shadow-lg ${
                            !canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </>
            )}

            {totalSlides > 1 && (
                <div className="flex justify-center gap-2 mt-6 lg:hidden">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all ${
                                index === currentIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardSlider;