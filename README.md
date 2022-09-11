![Licence](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/npm/v/react-image-carousel-viewer.svg?style=flat)](https://www.npmjs.com/package/react-image-carousel-viewer)
[![Downloads](https://img.shields.io/npm/dt/react-image-carousel-viewer.svg)](https://www.npmjs.com/package/react-image-carousel-viewer)

## React Image Carousel Viewer

Simple library with Image Carousel Viewer component for React.

## Installation

```npm i react-image-carousel-viewer```

## Live Demo

https://codesandbox.io/s/react-image-carousel-viewer-example-1-461uc1

## Example

```javascript
import { useState } from "react";
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import "./styles.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    {
      src: "http://placeimg.com/1200/800/nature",
      description: "image-1"
    },
    { src: "http://placeimg.com/800/1200/nature", description: "image-2" },
    { src: "http://placeimg.com/1920/1080/nature" },
    { src: "http://placeimg.com/1500/500/nature" }
  ];

  return (
    <>
      <p className="title">react-image-carousel-viewer</p>
      <div className="container">
        {images.map((image, index) => (
          <img
            className="image"
            src={image.src}
            alt=""
            key={index}
            onClick={() => {
              setIndex(index);
              setIsOpen(true);
            }}
          />
        ))}

        <ReactImageCarouselViewer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          images={images}
          startIndex={index}
        />
      </div>
    </>
  );
}

export default App;

```

## API

|   Property   |  Type  |    Description    |
| :---         |     :---      |          :--- |
| images   | {src: string; description?: string; id?: string}[]     | Array that contains image src and optional description.    |
| startIndex     | number       | First image from the array to display in the viewer.   |
| open     | boolean       | Trigger to open/close modal.    |
| onClose    | () => void       | Handle modal closing action.|
| leftArrow     | JSX.Element      | Custom component for left arrow (optional).     |
| rightArrow    | JSX.Element      | Custom component for right arrow (optional).      |
| loadingElement    | JSX.Element      | Custom component for loading animation (optional).      |
| extraTopElement    | JSX.Element      | Custom component for an element in the modal (optional).     |
| disableScroll    | boolean    | Trigger for scrolling action (optional).     |

## Keyboard Interactions

ESC - Closes modal

Scroll - Changes current image

Left Arrow - Show the previous image

Right Arrow - Shows the next image


