export const getPokemones = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    //llamado a la api
    const response = await fetch(url);
    const {results} = await response.json();
		console.log(results)
		const pokemons = results.map( async resp => {
				let character = await fetch(resp.url);		
				let characterResp = await character.json();
				let name = resp.name;
				let id = characterResp.id
				let descUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`
				let descQuery = await fetch(descUrl);
				let descResp = await descQuery.json();
				descResp.flavor_text_entries.map();


				let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
				console.log(descUrl)
				let pokeball = { 
					id: id,
					name: name,
					img: img,
					// desc: desc
				}
				
				return pokeball;
		});
		return pokemons;

}