import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

export function App() {
  const code = [
    {
      name: "Hot",
      image: "./src/assets/hot.jpg",
      description: "Hot freshly ground black coffee or a cup of exquisite tea?",
      secondDescription: "We give you that perfect cup every time.",
      info: [
        {
          name: "Mocha Latte",
          text: "€ 7.50",
        },
        {
          name: "Caffe Formaggio",
          text: "€ 5.00",
        },
        {
          name: "Espresso",
          text: "€ 3.50",
        },
        {
          name: "Chai Verde Latte",
          text: "€ 5.50",
        },
      ],
    },
    {
      name: "Juicy",
      image: "./src/assets/juicy.jpg",
      description: "Ripe fruit - freshly squeezed.",
      secondDescription:
        "It's as simple as that. Chunky or smooth - it's your choice.",
      info: [
        {
          name: "Branched Apricots",
          text: "€ 4.20",
        },
        {
          name: "Deep Rasberries",
          text: "€ 3.50",
        },
        {
          name: "Smooth Oranges",
          text: "€ 6.50",
        },
      ],
    },
    {
      name: "Cosy",
      image: "./src/assets/cosy.jpg",
      description: "Hang around. Enjoy the settings.",
      secondDescription: "Use our fast WiFi. Borrow a newspaper or a novel.",
      info: [
        {
          name: "Mon-Sun",
          text: "8am- 11pm",
        },
        {
          name: "Caffe Retro",
          text: "Canto VI",
        },
        {
          name: "0123-45 67 89",
          text: "caffe@lorem.pge",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar code={code} />

      {code.map((info) => (
        <Section object={info} key={info.name} />
      ))}
    </>
  );
}
