import React from "react";
//el componente TableItem (cada row de la tabla) recibe como parametro un pokemon
const TableItem = ({ pokemonParam }) => {
  return (
    <>
      <tr>
        <td>{pokemonParam.name}</td>
      </tr>
    </>
  );
};

export default TableItem;
