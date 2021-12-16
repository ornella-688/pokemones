import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getPokemones } from "../../helpers/getPokemones";
import { Banner } from "./Banner";
import TableItem from "./TableItem";


const Home = () => {
  //State utilizado para usar los pokemones de la api en el componente row
  const [pokemones, setPokemones] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  //indice para cada una de las row, react obliga a tener un indice Key
  let i = 1;


  //una vez que
  useEffect( async () => {
    //trae la data de la api
		getPokemones()
			.then( resp => {
				setPokemones(resp);
				setIsLoading(false);	
				console.log('En el then')
			})
	console.log('asd');
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
          {
					console.log(pokemones),
					pokemones.map((pokemon) => (
						<h1 key={pokemon.id}>{pokemon.name}</h1>
						// <TableItem key={pokemon.id} pokemonParam={pokemon} isLoading={isLoading}/>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
