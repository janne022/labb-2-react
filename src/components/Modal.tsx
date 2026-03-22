import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Close modal on Escape key press
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    // Cleanup after modal closed
    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Using portal here for rendering modal outside, thank you mr Brian Holt
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-surface p-6 shadow-2xl ring-1"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 transition-colors hover:bg-surface-hover rounded-full cursor-pointer focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="mt-2">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
