import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";
import { Wrapper } from "components/components.style";

function PaginaBase() {
    return (
        <Wrapper>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </Wrapper>
    )
}

export default PaginaBase;
