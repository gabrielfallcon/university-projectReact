import styled from 'styled-components'
import logo from '../../assets/fundo.jpg';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  height: 100vh;
  padding: 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: url(${logo}) no-repeat;
  background-size: cover;
  background-position: center;

  @media(max-width: 768px) {
    padding: 0;
    border-radius: 0;
    flex-direction: column-reverse;
    justify-content: center;
    padding: 0;
    background-image: none;
    background-color: #FAFAFA;

    img {
      width: 250px;
      top: 20px;
      position: relative;
      right: 25%;
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
  position: relative;

  img {
    width: 200px;
    margin: 0px;
    position: absolute;
    top: -30px;
  }
  
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin: 20px 0px;
  }

  form { 
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .input{
      width: 50%;
      height: 60px;
      display: flex;
      /* justify-content: space-around; */
      align-items: center;
      border: 0;
      background-color: #31629e;
      margin-bottom: 20px;
      flex-direction: row;
    }
    
    input {
      width: 100%;
      padding: 10px 20px;
      color: #FAFAFA;
      font-size: 18px;
      border-radius: 4px;
      background-color: transparent;
      border: 0;

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
    height: 100vh;
    border-radius: 0;
    background-color: #FAFAFA;

    h1{
      display: none;
    }

    form{
      width: 100%;
      .input {
        width: 80%;
        background-color: #31629e;
        input{
          width: 80%;
          color: #FAFAFA;
          background-color: transparent;
          ::placeholder {
            color: #FAFAFA;
          }
        }
      }
      button{
        width: 180px;
        background-color: #1D1D1D;
        color: #FAFAFA;
      }
    }
  }
`;
