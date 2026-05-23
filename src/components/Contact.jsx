import { CONTACT } from "../data/content.js";

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="section-inner">
        <div className="contact-card">
          <p className="eyebrow">A simple next step</p>
          <h2 id="contact-heading">One link for code, photos, and creative work.</h2>
          <p>
            A personal site for full-stack development, photography, retouching,
            and the business opportunities that can grow from both.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${CONTACT.email}`} className="button button-light">
              {CONTACT.email}
            </a>
            <a href={CONTACT.instagram} className="contact-social">
              Instagram
            </a>
            <a href={CONTACT.behance} className="contact-social">
              Behance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
