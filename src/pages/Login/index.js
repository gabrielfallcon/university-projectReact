import React, {useState} from 'react';
import { cpf } from 'cpf-cnpj-validator'
import api from '../../services/api'
import Error from '../../components/Error'

import { FiLogIn, FiLock} from 'react-icons/fi'

import logo from '../../assets/logo.png'

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

    const loginUser = await api.post('loginWeb', {
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
        <img src={logo}/>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input">
            <FiLogIn size={20} color="#FAFAFA" style={{marginLeft: 10}}/>
            <input 
              type="text" 
              placeholder="Digite seu CPF"
              value={cpff}
              onChange={e => setCpf(e.target.value)}
            />
          </div>

          {!cpf.isValid(cpff) && cpff.length >= 11 ? <Error error="CPF invalido" /> : ''}

          <div className="input">
            <FiLock size={20} color="#FAFAFA" style={{marginLeft: 10}}/>
            <input 
              type="password" 
              placeholder="Digite sua senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  )
}

export default Login;