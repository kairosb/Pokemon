import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'contexts/Favorito';

interface CardProps {
    name: string;
    url: string;
}

interface Pokemon {
    id: number;
    sprites: {
        front_default: string;
    };
}



export const Card = ({ name, url }: CardProps) => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const { favorito, adicionarFavorito } = useFavoritoContext();

    useEffect(() => {
        const procurandoPokemon = async () => {
            try {
                const response = await axios.get<Pokemon>(url);
                setPokemon(response.data);
            } catch (error) {
                console.error('Erro ao obter os Pokémon:', error);
            }
        };
        procurandoPokemon();
    }, [url]);


    const ehFavorito = favorito.some((fav) => fav.id === pokemon?.id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className="card">
                <img src={pokemon?.sprites.front_default} alt={name} className='capa' />
                <h2>{name}</h2>
            <img
                src={icone}
                alt="Favoritar Pokémon"
                className='favoritar icon'
                style={{ width: '25px' }}
                onClick={() => {
                    if (pokemon) {
                        adicionarFavorito({
                            id: pokemon.id,
                            name: name,
                            image: pokemon.sprites.front_default,
                            url: url
                        });
                    }
                }}
            />
        </div>
    );
};


export default Card;
