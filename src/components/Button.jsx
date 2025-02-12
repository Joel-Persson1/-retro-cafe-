/* eslint-disable react/prop-types */

export function Button({ text }) {
  return (
    <button
      className="btn"
      onClick={(e) => {
        const result = document.getElementById(e.target.innerText);
        result.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </button>
  );
}
