import React from 'react';

// import { Container } from './styles';

function Error(props) {
  return (
    <p style={{color: 'red', marginBottom: 20}}>{ props.error }</p>
  );
}

export default Error;