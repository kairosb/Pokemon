import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";
import './PaginaBase.css'

function PaginaBase() {
    return (
        <main className="todo">
            <Cabecalho />
            <Outlet />
            <Rodape />
        </main>
    )
}

export default PaginaBase;
