import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Pokemon {
    name: string;
}

export const SearchPage = () => {

    const { pokemonName } = useParams();

    const [pokemon, setPokemon] = useState<Pokemon>();

    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
                setPokemon(response.data);
            } catch (error) {
                setError(true);
                console.error('Erro ao obter os Pokémon:', error);
            }
        };

        fetchPokemons();
    }, [pokemonName]);

    if(error){
        return (
            <div>ERROOOOOOOOO</div>
        )
    }

    return (
        <div style={{height: "500px"}}>
           <div>{pokemon?.name}</div>
        </div>
    )
}

export default SearchPage;