import React from "react";

import "./Item.component.css";

interface ItemComponentInterface {
  image: string;
  name: string;
  value: number;
}

const Item = (data: ItemComponentInterface) => {
  return (
    <div className="item--container">
      <div className="item--image">
        <img src={data.image} alt="Teste" />
      </div>

      <div className="item--nome">
        <strong>{data.name}</strong>
      </div>

      <div className="item--description">
        <div className="item--valor">R${data.value}</div>
      </div>
    </div>
  );
};

export default Item;
