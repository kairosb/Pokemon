import { useFavoritoContext } from 'contexts/Favorito';
import './Favoritos.css'
import Card from 'components/Card';

export const Favoritos = () => {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <section className='container'>
                <div className='grid'>
                    {favorito.map((fav) => {
                        return <Card name={fav.name} url={fav.url} key={fav.id} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Favoritos;
