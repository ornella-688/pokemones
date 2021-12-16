import React from "react";
//el componente TableItem (cada row de la tabla) recibe como parametro un pokemon
const TableItem = ({ pokemonParam }, isLoading) => {
	if (isLoading)
		return (

			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{pokemonParam.name}</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>

		);
};

export default TableItem;
