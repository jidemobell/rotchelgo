import { TOOLS } from "../data/content.js";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="section-inner about-grid">
        <div>
          <div className="section-kicker">About Rotchelgo</div>
          <h2 id="about-heading" className="section-title">
            A creative technologist with a photographer&apos;s eye.
          </h2>
        </div>
        <div className="about-content">
          <p className="about-lead">
            Rotchelgo is a full-stack developer and professional photographer,
            shaped by web programming, visual storytelling, and practical image
            work.
          </p>
          <p>
            This site keeps everything under one clean personal brand. The
            photography is visible now; the developer portfolio can become a
            dedicated link when her projects are ready.
          </p>
          <ul className="tools-list" aria-label="Creative skills">
            {TOOLS.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
