import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ModalBackdrop from "./ModalBackdrop";
import ModalOverlay from "./ModalOverlay";

interface AppProps {
  onClick: () => void;
  selector: string;
  children: React.ReactNode;
}

const Modal = (props: AppProps) => {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(props.selector)!;
    setMounted(true);
  }, [props.selector]);

  return mounted ? (
    <React.Fragment>
      {createPortal(<ModalBackdrop onClick={props.onClick} />, ref.current!)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        ref.current!
      )}
    </React.Fragment>
  ) : null;
};

export default Modal;
