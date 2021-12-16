import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getPokemones } from "../../helpers/getPokemones";
import { Banner } from "./Banner";
import TableItem from "./TableItem";


const Home = () => {
  //State utilizado para usar los pokemones de la api en el componente row
  const [pokemones, setPokemones] = useState([]);
  //indice para cada una de las row, react obliga a tener un indice Key
  let i = 1;


  //una vez que
  useEffect( async () => {
    //trae la data de la api
		getPokemones()
			.then( resp => setPokemones(resp))
		
  }, []);

  return (
    <>
			<Banner />
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
