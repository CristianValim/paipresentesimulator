// styles.js
import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1rem;

  input[type='radio'] {
    display: none;
  }

  .radio-container {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  .custom-radio {
    border: 1px solid #999;
    width: 25px;
    height: 25px;
    display: grid;
    place-content: center;
    border-radius: 50%;
  }

  .custom-radio,
  .radio-container span {
    transition: 0.5s ease;
    color: #999;
  }

  .custom-radio span {
    content: '';
    width: 15px;
    height: 15px;
    background: #888;
    border-radius: 50%;
  }

  input[type='radio']:checked + .radio-container .custom-radio {
    border-color: #222;
  }

  input[type='radio']:checked + .radio-container .custom-radio span {
    background: #222;
  }

  @media (max-width: 600px){
  font-size: 1.6rem;
  }
`;
