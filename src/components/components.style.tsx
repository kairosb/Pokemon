import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;  
    align-items: flex-end; 
    position: relative;
`;

export const Grid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
`;

export const CardContainer = styled.div`
    text-align: center;
    margin: 0 32px;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: #888585;
    }
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardTitle = styled.h2`
    margin-top: 8px;
    margin-bottom: 0;
    text-align: center;
    width: 100%;
`;

export const FavoriteIcon = styled.img`
    padding: 0 1em;
    width: 25px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 20em;
    background-color: #b40303;
    height: 100px;
`;

export const Logo = styled.img`
    width: 200px;
    height: auto;
`;

export const Navigation = styled.nav``;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    background-color: #000000;
    margin-top: auto;

`;

export const H2 = styled.h2`
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
`;

export const Wrapper = styled.main`
    background-color: #cccaca;
    width: 100%;
    min-height: 100vh;
    height: 100%;
`;




