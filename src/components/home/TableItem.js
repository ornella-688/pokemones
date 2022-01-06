import React, { useEffect } from "react";
import './tableItem.css';
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
										<div className="card-image">
											<img src={poke.img} alt={poke.name} />
										</div>
										<div className="card-body">
											<h5 className="card-title">{poke.name.toUpperCase() }</h5>
											<p className="card-text">{poke.desc}</p>
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
