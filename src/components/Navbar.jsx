/* eslint-disable react/prop-types */
import { Button } from "./Button";

export function Navbar({ code }) {
  const [hot, juicy, cosy] = code;
  return (
    <nav className="navbar">
      <Button text={hot.name} />
      <Button text={juicy.name} />
      <Button text={cosy.name} />
    </nav>
  );
}
