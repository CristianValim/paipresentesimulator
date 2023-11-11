import styled from "styled-components";

export const Container = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
    font-family: 'Montserrat', sans-serif;
            color: #141414;

    padding: 4rem;
    border-radius: 2rem;
    background: rgba(250, 250, 250, 0.7);

    h2 {    
        border-top: 1px solid #60666d;
        padding: 2rem 0;
        font-size: 2rem;
        color: #141414;
        font-weight: normal;
    }
   
    @media (max-width: 600px){
        padding: 1rem;

        >h2 {
            padding: 1rem 0;
            font-size: 1.8rem;
        }
    }
`