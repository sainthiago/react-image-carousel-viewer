import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  ARROW_ICON,
  ARROW_PARENT_BASE,
  ARROW_WRAPPER,
  IMAGE_WRAPPER,
} from "../constants/classNames";
import { CarouselProps } from "../types/Carousel";
import Loading from "./Loading";
import ArrowLeftIcon from "./assets/arrow_left.svg";
import ArrowRightIcon from "./assets/arrow_right.svg";

const Carousel = (props: CarouselProps) => {
  const { leftArrow, rightArrow, images, startIndex, disableScroll } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(startIndex ?? 0);
  const [dragStart, setDragStart] = useState(0);

  const ref = useRef<HTMLImageElement | null>(null);

  const scrollToRight = () => {
    setIsLoading(true);
    if (currentIndex === images.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const scrollToLeft = () => {
    setIsLoading(true);
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "ArrowLeft" && currentIndex > 0) {
        scrollToLeft();
      } else if (
        event.code === "ArrowRight" &&
        currentIndex !== images.length - 1
      ) {
        scrollToRight();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        scrollToLeft();
      } else {
        scrollToRight();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    if (!disableScroll) {
      document.addEventListener("wheel", handleWheel);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (!disableScroll) {
        document.removeEventListener("wheel", handleWheel);
      }
    };
  });

  return (
    <>
      <div className="flex w-full items-center justify-center h-full relative">
        <div
          className={`${
            currentIndex !== 0 ? "visible" : "invisible"
          } ${ARROW_PARENT_BASE} left-4 md:left-10`}
          onClick={scrollToLeft}
        >
          {leftArrow ? (
            leftArrow
          ) : (
            <div className={`${ARROW_WRAPPER}`}>
              <img
                className={`${ARROW_ICON}`}
                src={ArrowLeftIcon}
                alt="Previous"
              />
            </div>
          )}
        </div>
        {images?.length && (
          <>
            <div className={`${!isLoading ? "hidden" : "block"}`}>
              <Loading />
            </div>
            <div
              className={`${isLoading ? "hidden" : "block"} ${IMAGE_WRAPPER}`}
            >
              <img
                ref={ref}
                alt="Main"
                className="w-full max-h-full object-contain absolute top-0 bottom-0 right-0 left-0 lg:py-16"
                src={images[currentIndex].src}
                onLoad={() => {
                  setTimeout(() => setIsLoading(false), 1000);
                }}
                onDragStart={(e) => setDragStart(e.clientX)}
                onDragEnd={(e) => {
                  if (dragStart > e.clientX) {
                    scrollToRight();
                    return;
                  }

                  scrollToLeft();
                }}
              />
            </div>
          </>
        )}

        <div
          className={`${
            currentIndex < images?.length - 1 ? "visible" : "invisible"
          } ${ARROW_PARENT_BASE} right-4 md:right-10 `}
          onClick={scrollToRight}
        >
          {rightArrow ? (
            rightArrow
          ) : (
            <div className={`${ARROW_WRAPPER}`}>
              <img
                className={`${ARROW_ICON}`}
                src={ArrowRightIcon}
                alt="Next"
              />
            </div>
          )}
        </div>
      </div>
      {images[currentIndex].description && !isLoading ? (
        <div className="flex justify-center text-gray-200 font-bold text-sm w-full text-center px-4 lg:-mt-8">
          {images[currentIndex].description}
        </div>
      ) : null}
    </>
  );
};

export default Carousel;
