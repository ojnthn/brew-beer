import React from "react";

import "./Item.component.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface ItemComponentInterface {
  image: string;
  name: string;
  value: number;
  description?: string;
}

const Item = (data: ItemComponentInterface) => {
  const modalContent = (
    <>
      <img className="modal--image" src={data.image} alt="Teste" />
      <p className="modal--content">{data.description}</p>
    </>
  );
  const showModal = () => {
    MySwal.fire({
      title: <p>{data.name}</p>,
      html: modalContent,
      didOpen: () => {},
    }).then(() => {});

    return undefined;
  };

  return (
    <div className="item--container" onClick={showModal}>
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
