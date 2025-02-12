/* eslint-disable react/prop-types */
import { Button } from "./Button";

export function Navbar({ code }) {
  return (
    <nav className="navbar">
      {code.map((info) => (
        <Button text={info.name} key={code.name} />
      ))}
    </nav>
  );
}
