import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;  
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
`;

export const FavoriteIcon = styled.img`
    padding: 0 1em;
    width: 25px;
`;
