import { useState } from "react";
import { GALLERY_ITEMS } from "../data/content.js";
import Lightbox from "./Lightbox.jsx";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section work" id="work" aria-labelledby="work-heading">
      <div className="section-inner">
        <div className="section-kicker">Selected work</div>
        <div className="section-heading-row">
          <h2 id="work-heading" className="section-title">
            Photography gives the portfolio its immediate proof.
          </h2>
          <p className="section-copy">
            The developer portfolio can link out later. For now, this page uses
            strong visuals to make the whole personal brand feel real.
          </p>
        </div>
        <ul className="gallery">
          {GALLERY_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`gallery-item${item.featured ? " gallery-item-featured" : ""}`}
            >
              <button
                type="button"
                className="gallery-link"
                onClick={() => setActive(item)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-index">{item.id}</span>
              </button>
              <div className="gallery-label">
                <span>{item.title}</span>
                <small>{item.meta}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}
