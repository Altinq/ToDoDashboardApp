import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = forwardRef(function Modal({ children }: ModalProps, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
    close() {
      dialog.current?.close();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 w-1/4  rounded-md shadow-md backdrop:bg-stone-900/90 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {children}

      <button
        onClick={() => dialog.current?.close()}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
      >
        ✕
      </button>
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
});

export default Modal;
