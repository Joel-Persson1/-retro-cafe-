/* eslint-disable react/prop-types */
import { Redbox } from "./RedBoxes";
import { ListItem } from "./ListItems";

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
        <article className="section-pricing">
          <ul className="pricing-list">
            {object.info.map((drink) => {
              return <ListItem key={drink.text} drink={drink} />;
            })}
          </ul>
        </article>
      </main>
    </section>
  );
}
