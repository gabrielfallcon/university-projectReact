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

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;

export const TypeRegister = styled.div`
  width: 40%;
  height: 100%;
  max-height: 500px;
  background-color: #FAFAFA;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  header {
    .logoff {
      height: 40px;
      width: 120px;
      background-color: transparent;
      border: 1px solid #121212;
      color: #1d1d1d;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 5px;
      position:absolute;
      top: 5px;
      right: 10px;
    }
    
    h1 {
      font-size: 34px;
      font-weight: 400;
      margin-bottom: 80px
    }
  }

  .btn{
    display: flex;
    flex-direction: column;
    
    button{
      height: 70px;
      width: 250px;
      background-color: #31629e;
      border: 0;
      color: #FAFAFA;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
    }

    .list {
      background-color: transparent;
      border: 1px solid #31629e;
      color: #31629e;
    }
  }

  @media(max-width: 768px) {
    width: 100%;
    border-radius: 0;
    
    header {
      width: 100%;
      display: flex;
      align-items:center;
      justify-content: space-around;
      
      .logoff {
        height: 40px;
        width: 100px;
        border: 1px solid #121212;
      }
    }
    .btn{
      margin-top: 50px;

      button{
        height: 50px;
        width: 200px;
      }

      .list {
        background-color: transparent;
        border: 1px solid #31629e;
        color: #31629e;
      }
    }
  }
`;

export const FormRegister = styled.div`
  width: 50%;
  height: 100%;
  max-height: 500px;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const UserRegister = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    color: #FAFAFA;
    margin-bottom: 20px;
  }

  @media(max-width: 768px) {
    height: auto;

    h1 {
      font-size: 30px;
      margin-top: 20px;
    }
  }
`;

export const ServiceRegister = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    color: #FAFAFA;
    margin-bottom: 20px;
  }

  @media(max-width: 768px) {
    height: auto;

    h1 {
      font-size: 30px;
      margin-top: 20px;
    }
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
      height: 50px;
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
      width: 90%;
      height: 150px;
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
      margin-bottom: 20px;
      padding: 10px 5px;
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
    margin-top: 5px;
    width: 150px;
    height: 50px;
    background-color: #FAFAFA;
    border: 0;
    font-size: 20px;
    align-self: flex-start;
    margin-left: 10px;
    border-radius: 5px;
  }

  .cadastro{
    margin-top: 20px;
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