export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  disableScroll?: boolean;
  leftArrow?: JSX.Element;
  rightArrow?: JSX.Element;
  startIndex: number;
  loadingElement?: JSX.Element;
  images: Image[];
}

export interface Image {
  src: string;
  description?: string;
  id?: string;
}
