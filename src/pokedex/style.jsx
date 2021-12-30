import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 317px;
  display: flex;
  justify-content: space-between;
  label {
    font-size: 16px;
    width: 100%;
    color: #626567;
  }
  input {
    width: 220px;
    padding: 10px;
    border: 1px solid #99A3A4;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  button {
    height: 37.7px;
    border: none;
    width: 70px;
    background: #136FBB;
    color: #fff;
    border-radius: 5px;
  }
`;

export const DivPokemon = styled.div`
  .buttonTitle {
    width: 100%;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    color: #909497;
    text-transform: uppercase;
    margin-top: 5px;
    border: none;
    background-color: transparent;
    &:hover {
      text-decoration: underline;
      color: #16A085;
    }
  }
  img {
    height: 180px;
    border-radius: 50%;
    background-color: #fff;
    margin-top: -90px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .header {
    width: 100%;
    height: 130px;
    border-radius: 10px 10px 0px 0px;
    background-image: linear-gradient(140deg, #53B9EC , #16A085);
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
  }
  .grid-item {
    font-size: 10px;
    text-align: center;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  padding: 10px;
`;

export const Info = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h2 {
    text-align: center;
    color: #A6ACAF;
  }
  h3 {
    width: 100%;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    color: #A6ACAF;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
  }
  img {
    height: 180px;
    border-radius: 50%;
    background-color: #fff;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pokemon {
    width: 35%;
    background-image: linear-gradient(140deg, #bff098 , #6fd6ff);
    border-radius: 10px 0 0 10px;
  }
  .info {
    width: 65%;
    padding: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    width: 80%;
    div {
      padding: 5px;
      text-transform: capitalize;
      color: #A6ACAF;
    }
  }
  button {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(140deg, #00e0d8 , #009565);
    background-color: transparent;
    color: #A6ACAF;
    font-size: 18px;
    width: 40%;
    height: 50px;
    &:hover {
      border: none;
      border-radius: 10px;
      background-image: linear-gradient(140deg, #00e0d8 , #009565);
      color: #fff;
    }
  }
`;