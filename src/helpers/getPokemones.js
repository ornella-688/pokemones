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
				let { flavor_text_entries: descResp} = await descQuery.json();
				let desc = '';
				descResp.map( resp => {
						if(resp.language.name === 'es'){
							desc = resp.flavor_text;
						}
				});

				let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
				let pokeball = { 
					id: id,
					name: name,
					img: img,
					desc: desc
				}
				
				return pokeball;
		});
		return pokemons;

}