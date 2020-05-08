import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #1D1D1D;
  padding: 30px;
  margin: 0;

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
  background-color: #BB86FC;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  header {
    .logoff {
      height: 60px;
      width: 150px;
      background-color: transparent;
      border: 3px solid #121212;
      color: #1d1d1d;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 40px;
      position:absolute;
      top: 5px;
      right: 10px;
    }
    
    h1 {
      font-size: 60px;
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
      background-color: transparent;
      border: 3px solid #121212;
      color: #1d1d1d;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
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

      h1 {
        font-size: 25px;
        margin-bottom: 50px;
        margin-left: -10%;
        margin-top: 10px;
      }
    }
  }
`;

export const FormRegister = styled.div`
  width: 50%;
  height: 100%;
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
    font-size: 60px;
    color: #BB86FC;
    margin-bottom: 10%;
  }

  @media(max-width: 768px) {
    height: auto;

    h1 {
      font-size: 40px;
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
    font-size: 60px;
    color: #BB86FC;
    margin-bottom: 10%;
  }

  @media(max-width: 768px) {
    height: auto;

    h1 {
      font-size: 40px;
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
      height: 70px;
      padding: 20px;
      margin: 0 10px;
      border: 0;
      background-color: #BB86FC;
      color: #121212;
      border-radius: 12px;
      font-size: 18px;

      ::placeholder {
        color: #000000;
      }
    }

    textarea {
      width: 60%;
      height: 300px;
      padding: 20px;
      margin: 0 10px;
      border: 0;
      background-color: #BB86FC;
      color: #121212;
      border-radius: 12px;
      font-size: 18px;

      ::placeholder {
        color: #000000;
      }
    }
    .prestador{
      margin-bottom: 10%;
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
    background-color: #BB86FC;
    border: 0;
    font-size: 20px;
    align-self: flex-start;
    margin-left: 10px;
    border-radius: 12px;
  }

  .cadastro{
    margin-top: 10%;
    align-self: flex-end;
    border: 2px solid #BB86FC;
    background-color: #1B1B1B;
    color: #BB86FC;
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