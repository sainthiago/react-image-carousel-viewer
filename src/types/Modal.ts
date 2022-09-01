export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  extraTopElement?: JSX.Element;
  open: boolean;
  onClose: () => void;
}
