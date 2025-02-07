/* eslint-disable react/prop-types */
import { Button } from "./Button";

export function Navbar({ cosy, juicy, hot }) {
  return (
    <nav className="navbar">
      <Button text={hot} />
      <Button text={juicy} />
      <Button text={cosy} />
    </nav>
  );
}
