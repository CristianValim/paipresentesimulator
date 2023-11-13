import styled from "styled-components";
import arrowDownUrl from './assets/arrowDown.svg'


export const Container = styled.div`
    font-size: 2rem;
    font-weight: bold;
    line-height: 4rem;
    color: #141414;
    text-align: center;
    display: flex;
    gap: 6rem;
    margin-bottom: 1.5rem;
    
    select {
        appearance: none;
        background-image: url(${arrowDownUrl});
        background-repeat: no-repeat;
        background-position: 10% center;
        background-size: 1.5rem;

        border: 1px solid #60666d;
        width: 15rem;
        border-radius: 2rem;

        color: #60666d;
        font-size: 18px;
        text-align: center;
    }

    @media (max-width: 600px){
    line-height: normal;
    gap: 1rem;
    font-size: 1.8rem;
    flex-direction: column;
    align-items: start;

    > select {
        padding: .7rem;
    }
    }
`;