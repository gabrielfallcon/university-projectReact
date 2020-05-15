import React, {useState} from 'react';
import { cpf } from 'cpf-cnpj-validator'

import api from '../../services/api'

import Error from '../../components/Error'

import { Container, Content } from './styles';

const Login = ({ history }) => {
  const [cpff, setCpf] = useState('')
  const [password, setPassword] = useState('')

  // const [user, setUser] = useState({
  //   cpff: 49514232860,
  //   senha: 12345678910
  // })

  const handleLogin = async (e) => {
    e.preventDefault()

    const loginUser = await api.post('login', {
      cpf: cpff,
      password: password
    });

    const { status, _id } = loginUser.data;

    if(status === false) {
      return alert('Usuário inválido');
    }

    localStorage.setItem('user', _id)

    history.push('register')
    
    return 
  }


  return(
    <Container>
      <Content>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Digite seu CPF"
            value={cpff}
            onChange={e => setCpf(e.target.value)}
          />

          {!cpf.isValid(cpff) && cpff.length >= 11 ? <Error error="CPF invalido" /> : ''}

          <input 
            type="password" 
            placeholder="Digite sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  )
}

export default Login;