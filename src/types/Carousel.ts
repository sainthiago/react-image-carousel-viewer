export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  disableScroll?: boolean;
  leftArrow?: JSX.Element;
  rightArrow?: JSX.Element;
  startIndex: number;
  images: Image[];
}

export interface Image {
  src: string;
  description?: string;
}
