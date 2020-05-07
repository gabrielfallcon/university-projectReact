import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png';

import { Container, Content } from './styles';

const Login = () => {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    cpf: 49514232860,
    senha: 20130036
  })

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (cpf == user.cpf && password == user.senha) {
        alert('Logou')
        setCpf('') 
        setPassword('')
        return
    }

    if (cpf === '' || password === '') {
      alert('Preencha todos os campos')
      setPassword('')
      setUser('')
      return
    }

    if (cpf != user.cpf || password != user.senha) {
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
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />
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