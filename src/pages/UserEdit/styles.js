import styled from 'styled-components'
import logo from '../../assets/fundo.jpg';


export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 30px;
  margin: 0;
  background: url(${logo}) no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .voltar {
    width: 150px;
    position: absolute;
    height: 50px;
    padding: 10px 0px;
    color: #FAFAFA;
    background-color: #31629e;
    font-size: 20px;
    font-weight: bold;
    border-radius: 6px;
    border: 1px solid #31629e;
    top: 20px;
    left: 20px;
    cursor: pointer;
    transition: .4s;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;

export const Table = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  margin-top: 10%;

  h1 {
    font-size: 28px;
    color: #FAFAFA;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .line {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: left;

    input, select {
      height: 70px;
      padding: 20px;
      margin: 0 10px;
      border: 0;
      background-color: #FAFAFA;
      color: #121212;
      border-radius: 5px;
      font-size: 18px;

      ::placeholder {
        color: #1D1D1D;
      }
    }

    textarea {
      width: 60%;
      height: 300px;
      padding: 20px;
      margin: 0 10px;
      border: 0;
      background-color: #FAFAFA;
      color: #121212;
      border-radius: 12px;
      font-size: 18px;

      ::placeholder {
        color: #000000;
      }
    }
    .prestador{
      margin-bottom: 10px;
    }
    .nome{
      width: 60%
    }
    .cpf{
      width: 40%
    }
    .senha{
      width: 35%;
    }
    .confirm{
      width: 35%
    }
    .endereco {
      width: 80%;
    }
    .numero{
      width: 20%;
    }
    .file {
      cursor: pointer;
    }
  }

  button {
    margin-top: 10px;
    width: 190px;
    height: 80px;
    background-color: #FAFAFA;
    border: 0;
    font-size: 20px;
    align-self: flex-start;
    margin-left: 10px;
    border-radius: 5px;
  }

  .cadastro{
    margin-top: 10%;
    align-self: flex-end;
    border: 0;
    background-color: #FAFAFA;
    color: #1D1D1D;
  }

  @media(max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0 5px;

    .line {
      flex-direction: column;
      margin-bottom: 0;
      align-items: center;

      input {
        width: 80% !important;
        margin-bottom: 10px;
      }
      textarea {
        width: 90%
      }
      .prestador {
        width: 70%;
      }
    }

    .cadastro {
      margin-bottom: 20px;
      align-self: center;
    }
  }
  
`;