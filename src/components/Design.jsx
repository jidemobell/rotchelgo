import { DESIGN_ITEMS } from "../data/content.js";

export default function Design() {
  return (
    <section className="section direction" id="direction" aria-labelledby="direction-heading">
      <div className="section-inner">
        <div className="direction-panel">
          <div>
            <div className="section-kicker">Two strong lanes</div>
            <h2 id="direction-heading" className="section-title">
              Developer skill plus visual taste is the opportunity.
            </h2>
          </div>
          <ul className="direction-list">
            {DESIGN_ITEMS.map((item) => (
              <li key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
