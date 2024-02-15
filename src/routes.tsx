import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from 'pages/PaginaBase'
import Inicio from 'pages/Inicio'
import Favoritos from 'pages/Favoritos'
import FavoritosProvider from "contexts/Favorito";


function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Inicio />}></Route>
                        <Route path="favoritos" element={<Favoritos />}></Route>
                    </Route>
                </Routes>
            </FavoritosProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;