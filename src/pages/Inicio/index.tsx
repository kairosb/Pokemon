import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'components/Card';
import { Container, Grid } from 'components/components.style'
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            main: string;
        };
    }

    interface PaletteOptions {
        custom?: {
            main: string;
        };
    }
}

const theme = createTheme({
    palette: {
        custom: {
            main: 'black',
        },
    },
});

interface Pokemon {
    name: string;
    url: string
}

export const Inicio = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const LIMIT = 15;
    const [OFFSET, setOFFSET] = useState(0);
    const [LOAD, setLOAD] = useState(false);

    useEffect(() => {
        const procurandoPokemons = async () => {
            try {
                setLOAD(true);
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${OFFSET}&limit=${LIMIT}`);
                setPokemons(response.data.results);
                setLOAD(false);
            } catch (error) {
                setLOAD(false);
                console.error('Erro ao obter os Pokémon:', error);
            }
        };

        procurandoPokemons();
    }, [OFFSET]);

    const increaseOffSet = () => {
        setOFFSET(prevOFFSET => prevOFFSET + LIMIT)
    }

    const decreaseOffSet = () => {
        setOFFSET(prevOFFSET => prevOFFSET - LIMIT)
    }

    return (
        <Container>

            {
                OFFSET >= LIMIT ? <IconButton style={{ color: theme.palette.custom.main }} onClick={() => {
                    decreaseOffSet();
                    window.scrollTo(0, 0);
                }
                }><ArrowBack></ArrowBack></IconButton>
                    : <></>
            }

            {
                LOAD ? (<div>Loading...</div>) : (<Grid>
                    {pokemons.map((pokemon) => (
                        <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                    ))}
                </Grid>)
            }


            <IconButton style={{ color: theme.palette.custom.main }} onClick={() => {
                increaseOffSet();
                window.scrollTo(0, 0);
            }
            }> <ArrowForward></ArrowForward> </IconButton>
        </Container>
    )
}

export default Inicio;
