import React from "react";
import { ImageViewerProps } from "../types/ImageViewer";
import Carousel from "./Carousel";
import Modal from "./Modal";
import "../styles/tailwind.css";

export const ReactImageCarouselViewer = (props: ImageViewerProps) => {
  const { open, onClose, images, startIndex } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Carousel images={images} startIndex={startIndex} />
    </Modal>
  );
};
