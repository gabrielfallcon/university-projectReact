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
  
  h1 {
    font-size: 60px;
    font-weight: 400;
    margin-bottom: 80px
  }

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
`;

export const FormRegister = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
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
  
`;