import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from 'pages/PaginaBase'
import Inicio from 'pages/Inicio'
import Favoritos from 'pages/Favoritos'
import FavoritosProvider from "contexts/Favorito";
import { SearchProvider } from "contexts/Search";
import SearchPage from "pages/SearchPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <SearchProvider>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />}></Route>
                            <Route path="favoritos" element={<Favoritos />}></Route>
                            <Route path="search/:pokemonName" element={<SearchPage />}> </Route>
                        </Route>
                    </Routes>
                </FavoritosProvider>
            </SearchProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;