import react, { useEffect } from "react";

const Home = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const fetchApi = async () =>{
        const pokemones = await fetch(url)
        const pokemonesJSON = await pokemones.json()
        console.log(pokemonesJSON)
    }
    useEffect (() => {
        fetchApi()
    }, [])
    return (
        <div>
            componente home
        </div>
    )
}

export default Home;