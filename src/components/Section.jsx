/* eslint-disable react/prop-types */
import { Redbox } from "./RedBoxes";
import { BlackBox } from "./BlackBox";

export function Section({ object }) {
  return (
    <section
      className="hero-image"
      id={object.name}
      style={{ backgroundImage: `url("${object.image}")` }}
    >
      <main className="hero-container">
        <h1 className="section-header">{object.name}</h1>
        <article className="section-description">
          <Redbox
            description={object.description}
            text={object.secondDescription}
          />
        </article>
        <BlackBox object={object} />
      </main>
    </section>
  );
}
