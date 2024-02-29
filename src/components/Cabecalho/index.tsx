import { Link, useNavigate } from 'react-router-dom';
import CabecalhoLink from 'components/CabecalhoLink'
import logo from './logo-pokemon.png';
import { Logo, Header, Navigation } from 'components/components.style';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import { useSearch } from 'contexts/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



function Cabecalho() {

    const navigation = useNavigate();

    const [search, setSearch] = useState<string>('');

    const { handleSearchChange } = useSearch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        handleSearchChange(event.target.value);
    };


    return (
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

            <Search>
                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={search}
                    onChange={handleInputChange}
                    onKeyDown={(event) => {
                        if(event.key === 'Enter' && search !== ''){
                            navigation(`search/${search.toLowerCase()}`)
                        }
                    }}
                />
            </Search>

        </Header>
    )
}

export default Cabecalho;