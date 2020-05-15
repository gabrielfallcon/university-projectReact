import styled from 'styled-components'
import logo from '../../assets/fundo.jpg';

export const Container = styled.div`
  /* box-sizing: border-box; */
  /* width: 100%; */
  flex: 1;
  height: 100vh;
  /* background-color: #1D1D1D; */
  padding: 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: url(${logo}) no-repeat;
  background-size: cover;
  background-position: center;

  img {
    width: 400px;
    position: absolute;
    right: 20%;
    top: 20%;
  }

  @media(max-width: 768px) {
    padding: 0;
    border-radius: 0;
    flex-direction: column-reverse;
    justify-content: center;

    img {
      width: 250px;
      top: 20px;
      position: relative;
      right: 0;
    }
  }
`;

export const Content = styled.div`
  width: 40%;
  height: 100%;
  max-height: 550px;
  background-color: #FAFAFA;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 50px
  }

  form { 
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    
    input {
      width: 50%;
      height: 60px;
      border: 0;
      background-color: #31629e;
      padding: 10px 20px;
      margin-bottom: 20px;
      color: #FAFAFA;
      font-size: 18px;
      border-radius: 4px;

      &::placeholder {
        color: #FAFAFA;
      }
    }
    button {
      width: 120px;
      height: 60px;
      color: #fff;
      font-size: 18px;
      background-color: #1D1D1D;
      margin-top: 20px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      border: 0;
    }
  }

  @media(max-width: 768px) {
    width: 100%;
    max-height: 400px;
    border-radius: 0;
    background-color: #1D1D1D;

    h1{
      display: none;
    }

    form{
      input{
        width: 80%;
        color: #1D1D1D;
        background-color: #BB86FC;
        ::placeholder {
          color: #121212;
        }
      }
      button{
        width: 180px;
        background-color: #BB86FC;
        color: #1D1D1D;
      }
    }
  }
`;
