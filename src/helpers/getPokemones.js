export const getPokemones = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
		const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png";
    //llamado a la api
    const response = await fetch(url);
    const {results} = await response.json();
		let pokeArray = [];

		const pokemons = results.map( async resp => {
				let character = await fetch(resp.url);		
				let characterResp = await character.json();
				let name = resp.name;
				let id = characterResp.id
				let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	
				let poke = { 
					id: id,
					name: name,
					img: img
				}
				
				pokeArray.push(poke);
		});
		
		return pokeArray;

}