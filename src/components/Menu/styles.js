import styled from "styled-components";

export const Container = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    font-family: 'Roboto', sans-serif;
            color: #141414;

    padding: 4rem;
    border-radius: 2rem;
    background: rgba(250, 250, 250, 0.7);

    h2 {    
        border-top: 1px solid #60666d;
        padding: 2rem 0;
        font-size: 2rem;
        color: #141414;
        font-weight: bold;
    }
   
    @media (max-width: 600px){
        padding: 2.5rem;

        >h2 {
            padding: 1rem 0;
            font-size: 1.8rem;
        }
    }
`