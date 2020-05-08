import React from 'react';

import { Container } from './styles';

const Modal = (props) => {
  return(
    <Container>
      <div className="content">
        <h1>{props.title}</h1>
        <button onClick={() => props.close()}>OK</button>
      </div>
    </Container>
  );
}

export default Modal;