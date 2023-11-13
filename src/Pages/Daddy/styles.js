import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;

justify-content: space-around;

padding-bottom: 10rem;

.flex {
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  
}

  @media (max-width: 600px){
    width: 90%;
    padding: 0;
    margin: 0 auto;

    .flex {
      flex-direction: column;
      gap: 10rem;
    }
  }
`;