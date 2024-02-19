import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'components/Card';

import {Container, Grid} from 'components/components.style'

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
        <Container>
            <Grid>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                ))}
            </Grid>
        </Container>
    )
}

export default Inicio;
