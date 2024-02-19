import { useFavoritoContext } from 'contexts/Favorito';
import Card from 'components/Card';
import {Container, Grid} from 'components/components.style'

export const Favoritos = () => {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Container>
                <Grid>
                    {favorito.map((fav) => {
                        return <Card name={fav.name} url={fav.url} key={fav.id} />
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Favoritos;
