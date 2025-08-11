import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  ref: React.RefObject<any>;
}

export default function Modal({ children, ref }: ModalProps) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 rounded-md shadow-md backdrop:bg-stone-900/90 "
    >
      {children}
      <form method="dialog" className="mt-4 text-right"></form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
