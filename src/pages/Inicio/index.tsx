import { useEffect, useState } from 'react';
import './Inicio.css'
import axios from 'axios';
import Card from 'components/Card';

interface Pokemon {
    name: string;
    url: string
}

export const Inicio = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const limit = '21';

    useEffect(() => {
        const procurandoPokemons = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
                setPokemons(response.data.results);
            } catch (error) {
                console.error('Erro ao obter os Pokémon:', error);
            }
        };
        
        procurandoPokemons();
    }, []);


    return (
        <section className='container'>
            <div className='grid'>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                ))}
            </div>
        </section>
    )
}

export default Inicio;
