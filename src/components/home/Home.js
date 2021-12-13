import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableItem from "./TableItem";

const Home = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  //State utilizado para usar los pokemones de la api en el componente row
  const [pokemones, setPokemones] = useState([]);
  //indice para cada una de las row, react obliga a tener un indice Key
  let i = 1;

  //llamado a la api
  const fetchApi = async () => {
    const pokemones = await fetch(url);
    const pokemonesJSON = await pokemones.json();
    //guarda en el state
    setPokemones(pokemonesJSON.results);
  };
  //una vez que
  useEffect(() => {
    //trae la data de la api
    fetchApi();
  }, []);

  return (
    <>
      <Table striped bordered hover size="dark">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            //itera el state
          }
          {pokemones.map((pokemon) => (
            <TableItem key={i++} pokemonParam={pokemon} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
