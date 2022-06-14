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
    name: "Cerveja Pilsner",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
  {
    name: "Cerveja IPA",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
  {
    name: "Cerveja Pilsen",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
  {
    name: "Cerveja Lager",
    value: 12.56,
    image: beer,
    description:
      "Cerveja leve e refrescante, feita para matar a sede e para serem bebidas bem geladas. É o tipo das cervejas mais populares dos Estados Unidos, com exemplos como Budweiser, Coors e a australiana Foster's. A maioria das cervejas populares no Brasil, como Brahma, Skol, Kaiser e Antarctica, são American Lagers, mesmo que elas se intitulem no rótulo e descrição no verso como Pilsen, talvez até devido a convenção nacional para a classificação de cervejas.",
  },
  {
    name: "Cerveja Pale Ale",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
  {
    name: "Cerveja Bock",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
  {
    name: "Cerveja Weissbier",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
  {
    name: "Cerveja Stout",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
  {
    name: "Cerveja Porter",
    value: 12.56,
    image: beer,
    description:
      "A Pale Lager original, desenvolvida como receita da cerveja Pilsner Urquell. São caracterizadas por um lúpulo acentuado no aroma e sabor. Também chamadas de Pilsener e Pilsen. Podem aparecer em 2 estilos um pouco diferentes, principalmente devido à escola: Bohemian/Czech Pilsner , representada pela Pilsner Urquell e Budweiser Budvar/Czechvar, ambas Tchecas e meio difíceis de encontrar; German Pilsner, facilmente encontradas nas representantes Bitburger, Warsteiner, Konig Pilsener, Spaten Pils.",
  },
];

function App() {
  return (
    <>
      <Header />

      <div className="items--container">
        <div className="main-content--container">
          <div className="main-content">
            {content.map((item, key) => (
              <Item
                key={key}
                image={item.image}
                name={item.name}
                value={item.value}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
