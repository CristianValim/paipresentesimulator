import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
position: relative;
display:flex;
flex-direction: row;
justify-content: space-evenly;
padding-top: 45rem;


> *:nth-child(1) {
  position: absolute;
  top: -3rem;
}

  @media (max-width: 600px){
    flex-direction: column-reverse;
    padding-top: 15rem;
    gap: 5rem;

    width: 90%;
    margin: 0 auto;

    > *:nth-child(1) {
    top: 0;
    }
  }
`;