import React, {useState} from 'react';
import { cpf } from 'cpf-cnpj-validator'

import logo from '../../assets/logo.png';
import Error from '../../components/Error'


import { Container, Content } from './styles';

const Login = ({ history }) => {
  const [cpff, setCpf] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    cpff: 49514232860,
    senha: 12345678910
  })

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (cpff == user.cpff && password == user.senha) {
        setCpf('') 
        setPassword('')

        history.push('/register')

        return
    }

    if (cpff === '' || password === '') {
      alert('Preencha todos os campos')
      setPassword('')
      setUser('')
      return
    }

    if (cpff != user.cpff || password != user.senha) {
      alert('Os campos estao invalidos')
      setPassword('')
      setCpf('')
      return
    }
    
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
      <img src={logo} alt="Mallet"/>
    </Container>
  )
}

export default Login;