/* eslint-disable react/prop-types */
export function ListItem({ drink }) {
  return (
    <li className="list-item">
      {drink.name} <span>{drink.text}</span>
    </li>
  );
}
