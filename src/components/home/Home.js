import React, { useEffect, useState } from "react";
import { getPokemones } from "../../helpers/getPokemones";
import { Banner } from "./Banner";
import TableItem from "./TableItem";


const Home = () => {
	//State utilizado para usar los pokemones de la api en el componente row
	const [pokemones, setPokemones] = useState([]);
	//una vez que

	useEffect(() => {
		//trae la data de la api

		getPokemones()
			.then(resp => {
				//Esperamos que se cumplan todas las promesas
				Promise.all(resp).then(values => {
					setPokemones(values);
				});
			})
	}, []);

	return (
		<>
			<Banner />
			<TableItem key='TableItem' pokemonParam={pokemones} ></TableItem>
			{
				//itera el state
				// console.log(pokemones),


			}

		</>
	);
};

export default Home;
