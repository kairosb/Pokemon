import { Link } from 'react-router-dom';
import './Cabecalho.css';
import CabecalhoLink from 'components/CabecalhoLink'
import logo from './logo-pokemon.png';

function Cabecalho(){
    return(
        <header className='cabecalho'>
            <Link to="./">
                <img src={logo} alt="Logo Pokemon" className='imagem'></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>

        </header>
    )
}

export default Cabecalho;