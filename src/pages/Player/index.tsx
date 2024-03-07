import { Avatar, LinearProgress, List, ListItem, Paper, Rating, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import { CardTitle } from "components/components.style";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AcUnitIcon from '@mui/icons-material/AcUnit';

interface PokemonAbilities {
    is_hidden: boolean;
    slot: number;
    ability: {
        name: string;
        url: string;
    }
}

interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
        back_default: string,
        back_shiny: string,
        front_shiny: string
    };
    stats: PokemonStat[];
    types: PokemonType[];
    abilities: PokemonAbilities[];
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
                console.log(response.data);
            } catch (error) {
                setError(true);
                console.error('Erro ao obter os Pokémon:', error);
            }
        };

        fetchPokemons();
    }, [pokemonName]);

    if (error) {
        return (
            <div>ERROOOOOOOOO</div>
        )
    }

    const hp = pokemon?.stats.at(0)?.base_stat;
    const attack = pokemon?.stats.at(1)?.base_stat;
    const defense = pokemon?.stats.at(2)?.base_stat;
    const specialAttack = pokemon?.stats.at(3)?.base_stat;
    const name = pokemon ? pokemon?.name.charAt(0)?.toUpperCase() + pokemon?.name.slice(1) : "";

    return (
        <>
            <CssBaseline />
            <Container>
                <Box sx={{ display: "flex", marginTop: "10px", marginBottom: "10px" }}>
                    <Avatar
                        alt={pokemon?.name}
                        src={pokemon?.sprites.front_default}
                        sx={{ height: 256, width: 256 }} />
                    <div style={{ width: "896px" }}>
                        <CardTitle>{name}</CardTitle>
                        <p style={{ width: "896px", wordWrap: "break-word" }}>
                            Ah, eis aqui um espécime extraordinário: o Pokémon conhecido como {name}. Ele carrega consigo a honra de pertencer ao tipo {pokemon?.types.map((type, index) => {
                                if (pokemon.types.length === 1) {
                                    return type.type.name;
                                } else {
                                    return index === pokemon.types.length - 1 ? type.type.name : type.type.name + ' e ';
                                }
                            })}.

                            Dentro das vastas paisagens de sua espécie, ele se destaca por suas habilidades marcantes. Desde {pokemon?.abilities.map((ability, index) => {
                                if (pokemon.abilities.length === 1) {
                                    return ability.ability.name;
                                } else {
                                    return index === pokemon.abilities.length - 1 ? ability.ability.name : ability.ability.name + ' e ';
                                }
                            })}, suas habilidades brilham como estrelas no céu noturno.

                            Observe a harmonia de sua constituição, a fusão de sua natureza elementar. Ele é uma obra-prima da evolução, uma síntese de poder e elegância. Permita-se apreciar a complexidade que reside em cada traço deste ser excepcional.
                        </p>
                    </div>
                </ Box>
                <Box sx={{ display: "flex" }}>
                    <TableContainer sx={{ width: "256px" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Caracteristica</TableCell>
                                    <TableCell>Valor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">{pokemon?.stats.at(0)?.stat.name}</TableCell>
                                    <TableCell align="right">{hp}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">{pokemon?.stats.at(1)?.stat.name}</TableCell>
                                    <TableCell align="right">{attack}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">{pokemon?.stats.at(2)?.stat.name}</TableCell>
                                    <TableCell align="right">{defense}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">{pokemon?.stats.at(3)?.stat.name}</TableCell>
                                    <TableCell align="right">{specialAttack}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <List sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <img src={pokemon?.sprites.back_default} alt="" />
                        <img src={pokemon?.sprites.front_shiny} alt="" />
                        <img src={pokemon?.sprites.back_shiny} alt="" />
                    </List>
                </Box>
            </Container>
        </>
    )
}

export default SearchPage;