import styled from 'styled-components'

export const Container = styled.div`  
  width: 100%;
  height: 100vh;
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const Table = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  margin-top: 10%;

  button {
    width: 150px;
    height: 50px;
    padding: 10px 0px;
    color: #31629e;
    background-color: #FAFAFA;
    font-size: 20px;
    font-weight: bold;
    border-radius: 6px;
    border: 1px solid #31629e;
    top: -30%;
    left: -10%;
    margin-top: 20px;
    cursor: pointer;
    transition: .4s;

    &:hover {
      background-color: #31629e;
      color: #FAFAFA;
      border: 1px solid #31629e;
    }
  }
  ul{
    display: flex;
    justify-content: space-around;

    li {
      min-width: 30%;
      width: auto;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      list-style: none;
      border-bottom: 1px solid #1D1D1D;
      padding: 10px 0;
    }
    li.action {
      width: 250px;
      justify-content: center;

      button {
        width: 100px;
        font-size: 16px;
        margin-right: 5px;
      }
      .edit {
        color: #1D1D1D;
        border: 1px solid yellow;
        background-color: yellow;

        &:hover {
          border: 1px solid #1D1D1D;
        }
      }
      .delete {
        color: red;
        border: 1px solid red;

        &:hover {
          background-color: red;
          color: #FAFAFA;
          border: 1px solid red;
        }
      }
    }
  }
  ul.title{


    li {
      font-size: 22px;
      font-weight: bold;
      color: #1D1D1D;
    }
  }
`;