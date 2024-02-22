import { useFavoritoContext } from 'contexts/Favorito';
import Card from 'components/Card';
import { Container, Grid } from 'components/components.style'
import { IconButton, createTheme } from '@mui/material';
import { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';


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

export const Favoritos = () => {
    const { favorito } = useFavoritoContext();

    const [LIMIT, setLIMIT] = useState(15);
    const [OFFSET, setOFFSET] = useState(0);
    const qtd = 15;

    const increaseOffSet = () => {
        setOFFSET(prevOFFSET => prevOFFSET + qtd)
        setLIMIT(prevLIMIT => prevLIMIT + qtd)
    }

    const decreaseOffSet = () => {
        setOFFSET(prevOFFSET => prevOFFSET - qtd)
        setLIMIT(prevLIMIT => prevLIMIT - qtd)
    }

    console.log(favorito.length)
    console.log(OFFSET + qtd)

    return (
        <>
            <Container>

                {
                    OFFSET >= 15 ? <IconButton style={{ color: theme.palette.custom.main }} onClick={() => {
                        decreaseOffSet();
                        window.scrollTo(0, 0);
                    }
                    }><ArrowBack></ArrowBack></IconButton>
                        : <></>
                }

                <Grid>
                    {favorito.map((fav, index) => {
                        return index >= OFFSET && index < LIMIT ? <Card name={fav.name} url={fav.url} key={fav.id} /> : <></>
                    })}
                </Grid>



                {
                    favorito.length > OFFSET + qtd? <IconButton style={{ color: theme.palette.custom.main }} onClick={() => {
                        increaseOffSet();
                        window.scrollTo(0, 0);
                    }
                    }> <ArrowForward></ArrowForward> </IconButton> : <></>
                }
            </Container>
        </>
    )
}

export default Favoritos;
