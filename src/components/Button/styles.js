import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background: transparent;
    
    img{
    background: rgb(255, 0, 0);
    width: 20rem;
    border-radius: 50%;

    @media (max-width: 600px){
    width: 10rem;
    }
    }
`;