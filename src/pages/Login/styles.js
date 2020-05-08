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
  position: relative;

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

  form { 
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    
    input {
      width: 50%;
      height: 70px;
      border: 0;
      background-color: #1D1D1D;
      padding: 10px 20px;
      margin-bottom: 20px;
      color: #BB86FC;
      font-size: 18px;
      border-radius: 12px;
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
      border-radius: 12px;
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
