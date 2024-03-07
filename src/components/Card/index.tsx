import React, { useEffect, useState } from 'react';
import axios from 'axios';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'contexts/Favorito';
import { CardContainer, CardImage, CardTitle, FavoriteIcon } from 'components/components.style'
import { useNavigate } from 'react-router-dom';

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

    name = name.charAt(0).toUpperCase() + name.slice(1);

    const navigation = useNavigate();

    return (
        <CardContainer>
            <div onClick={
                () => {
                    navigation(`${name.toLocaleLowerCase()}`)
                }
            }>
                <CardImage src={pokemon?.sprites.front_default} alt={name} />
                <CardTitle>{name}</CardTitle>
            </div>
            <FavoriteIcon
                src={icone}
                alt="Favoritar Pokémon"
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
        </CardContainer>
    );
};


export default Card;
