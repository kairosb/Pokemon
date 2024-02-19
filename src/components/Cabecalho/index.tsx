import { Link } from 'react-router-dom';
import CabecalhoLink from 'components/CabecalhoLink'
import logo from './logo-pokemon.png';
import { Logo, Header, Navigation } from 'components/components.style';

function Cabecalho(){
    return(
        <Header>
            <Link to="./">
                <Logo src={logo} alt="Logo Pokemon"></Logo>
            </Link>
            <Navigation>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </Navigation>

        </Header>
    )
}

export default Cabecalho;