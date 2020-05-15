import styled from 'styled-components'

export const Container = styled.div`

  width: 98vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  background-color: rgba(0,0,0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .content{
    height: 300px;
    max-width: 600px;
    width: 40%;
    padding: 30px 20px;
    border: 3px solid #1D1D1D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #31629e;
    border-radius: 12px;

    h1 {
      font-size: 40px;
      color: #1d1d1d;
      margin-bottom: 20px
    }

    button {
      width: 100px;
      height: 60px;
      background-color: #31629e;
      border: 2px solid #FAFAFA; 
      border-radius: 5px;
    }
  }

  @media(max-width: 768px) {
    height: 100%;

    .content {
      width: 350px;
      text-align: center;

      h1 {
        font-size: 30px;
      }
    }
  }

`;