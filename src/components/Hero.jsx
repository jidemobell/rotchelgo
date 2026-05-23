import { PORTRAIT_IMAGE } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Full-stack developer / professional photographer</p>
          <h1 id="hero-heading">Building digital experiences and visual stories.</h1>
          <p className="hero-lead">
            Rotchelgo combines web programming with a photographer&apos;s eye for
            light, colour, people, and detail.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              View creative work
            </a>
            <a href="#contact" className="button button-ghost">
              Talk about a project
            </a>
          </div>
          <dl className="hero-stats" aria-label="Professional focus">
            <div>
              <dt>Code</dt>
              <dd>Full-stack</dd>
            </div>
            <div>
              <dt>Lens</dt>
              <dd>Pro photo</dd>
            </div>
            <div>
              <dt>Bridge</dt>
              <dd>Design taste</dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual" aria-label="Rotchelgo portrait">
          <figure className="portrait-card">
            <img
              src={PORTRAIT_IMAGE}
              alt="Rotchelgo"
              width={480}
              height={600}
              fetchPriority="high"
            />
            <figcaption>
              <span>Rotchelgo</span>
              <span>full-stack development / photography</span>
            </figcaption>
          </figure>
          <div className="floating-card floating-card-top">
            Developer portfolio coming soon
          </div>
          <div className="floating-card floating-card-bottom">
            Websites, visuals, and clean first impressions.
          </div>
        </div>
      </div>
    </section>
  );
}
