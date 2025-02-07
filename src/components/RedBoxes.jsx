/* eslint-disable react/prop-types */
export function Redbox({ description, text }) {
  return (
    <>
      <p className="description-text top">{description}</p>
      <p className="description-text bottom">{text}</p>
    </>
  );
}
