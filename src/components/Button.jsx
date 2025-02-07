/* eslint-disable react/prop-types */

export function Button({ text }) {
  return (
    <button
      className="btn"
      onClick={(e) => {
        const result = document.getElementById(e.target.innerText);
        console.log(result);
        result.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </button>
  );
}
