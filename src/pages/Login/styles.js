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
`;
