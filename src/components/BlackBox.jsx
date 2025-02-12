/* eslint-disable react/prop-types */
import { ListItem } from "./ListItems";

export function BlackBox({ object }) {
  return (
    <article className="section-pricing">
      <ul className="pricing-list">
        {object.info.map((drink) => {
          return <ListItem key={drink.text} drink={drink} />;
        })}
      </ul>
    </article>
  );
}
