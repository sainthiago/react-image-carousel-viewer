![Licence](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/npm/v/react-image-carousel-viewer.svg?style=flat)](https://www.npmjs.com/package/react-image-carousel-viewer)
[![Downloads](https://img.shields.io/npm/dt/react-image-carousel-viewer.svg)](https://www.npmjs.com/package/react-image-carousel-viewer)

## React Image Carousel Viewer

Simple library with Image Carousel Viewer component for React.

## Installation

```npm i react-image-carousel-viewer```

## Demo

## API

|   Property   |  Type  |    Description    |
| :---         |     :---      |          :--- |
| images   | {src: string; description?: string}[]     | Array that contains image src and optional description.    |
| startIndex     | number       | First image from the array to display in the viewer.   |
| open     | boolean       | Trigger to open/close modal.    |
| onClose    | () => void       | Handle modal closing action.|
| leftArrow     | JSX.Element      | Custom component for left arrow (optional).     |
| rightArrow    | JSX.Element      | Custom component for right arrow (optional).      |
| extraTopElement    | JSX.Element      | Custom component for an element in the modal (optional).     |
| disableScroll    | boolean    | Trigger for scrolling action (optional).     |

