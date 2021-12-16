export const getPokemones = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    //llamado a la api
    const response = await fetch(url);
    const {results} = await response.json();
		

		return results;

}