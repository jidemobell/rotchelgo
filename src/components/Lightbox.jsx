import { useEffect } from "react";

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="lightbox is-open"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="lightbox-close"
        aria-label="Close preview"
        onClick={onClose}
      >
        &times;
      </button>
      <img src={item.src} alt={item.alt} />
      <p className="lightbox-caption">{item.caption}</p>
    </div>
  );
}
