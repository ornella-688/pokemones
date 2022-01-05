import React, { useEffect } from "react";
//el componente TableItem (cada row de la tabla) recibe como parametro un pokemon
const TableItem = ({ pokemonParam }) => {
	useEffect(() => {
	}, [])
	return (
		<div className="container-fluid">
			<div className="row">
				{
					pokemonParam.map(poke => {
						return (
							<div className="col-sm-6 col-md-4"  key={poke.id}>
								<div className="card">
									<div>
										<img src={poke.img} alt={poke.name} />
										<div className="card-body">
											<h5 className="card-title">{poke.name}</h5>
											<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										</div>
									</div>
								</div>
							</div>
						)
					})

				}
			</div>
		</div>
	);
};

export default TableItem;
