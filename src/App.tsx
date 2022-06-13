import React from "react";

/**
 * Components
 */
import Header from "./ui/components/Header.component";
import Item from "./ui/components/Item.component";

import "./App.css";
import beer from "./image/beer.png";
import Footer from "./ui/components/Footer.component";

const content = [
  {
    name: "Cerveja",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja IPA",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja Pilsen",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja Lager",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja Pale Ale",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja Bock",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja Weissbier",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja Stout",
    value: 12.56,
    image: beer,
  },
  {
    name: "Cerveja Porter",
    value: 12.56,
    image: beer,
  },
];

function App() {
  return (
    <>
      <Header />

      <div className="items--container">
        <div className="main-content--container">
          <div className="main-content">
            {content.map((item) => (
              <Item image={item.image} name={item.name} value={item.value} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
