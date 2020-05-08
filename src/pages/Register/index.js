import React, { useState } from 'react';
import { cpf } from 'cpf-cnpj-validator'

import Modal from '../../components/Modal'
import Error from '../../components/Error'

import { Container, TypeRegister, FormRegister, UserRegister, ServiceRegister, Form } from './styles';

const Register = ({ history }) => {
  const [cpff, setCpf] = useState('')

  const [typeUser, setTypeUser] = useState(true)
  const [success, setSuccess] = useState(false)

  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  // const cpfPattern = /^([0-9]{3}?[\.]?[-]?[0-9]{3}?[\.]?[-]?[0-9]{3}?[-]?[0-9]{2})*$/g;

  const setService = () => {
    setTypeUser(false)
  }

  const setUser = () => {
    setTypeUser(true)
  }

  const closeModel = () => {
    setSuccess(false)
  }

  const handdlRegister = (e) => {
    e.preventDefault()

    setSuccess(true)
  }

  const logoff = () => {
    history.push('/')
  }

  return (
    <Container>
      {success == true ? <Modal close={closeModel} title="Cadastrado com sucesso" /> : ''}
      <TypeRegister>
        <header>
          <h1>Tipos de Cadastro</h1>
          <button onClick={logoff} className="logoff">Sair</button>
        </header>
        <div className="btn">
          <button onClick={setUser}>Usuário</button>
          <button onClick={setService}>Serviço</button>
        </div>
      </TypeRegister>

      <FormRegister>
        {typeUser === true
          ?
          <UserRegister>
            <h1>Cadastro de Usuário</h1>
            <Form onSubmit={handdlRegister}>
              <div className="line">
                <select name="prestador" className="prestador" required>
                  <option value="prestador">Prestador</option>
                  <option value="cliente">Cliente</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="line">
                <input type="text" className="nome" placeholder="Nome" required />
                <input type="text" value={cpff} onChange={e => setCpf(e.target.value)} className="cpff" placeholder="CPF" required />
              </div>
              {!cpf.isValid(cpff) && cpff.length >= 11 ? <Error error="CPF invalido" /> : ''}
              <div className="line">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="senha" placeholder="Senha" required />
                <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="confirm" placeholder="Confirme a senha" required />
              </div>
              {password !== confirm ? <Error error="As senhas não batem" /> : ''}
              <div className="line">
                <input type="text" className="endereco" placeholder="Endereço" required />
                <input type="text" className="numero" placeholder="Numero" required />
              </div>
              {/* <button>Add Endereço</button> */}
              <button type="submit" className="cadastro">Cadastrar</button>
            </Form>
          </UserRegister>
          :
          <ServiceRegister>
            <h1>Cadastro de Serviço</h1>
            <Form onSubmit={handdlRegister}>
              <div className="line">
                <input type="text" placeholder="Nome" required />
              </div>
              <div className="line">
                <input type="file" className="file" placeholder="Anexar arquivo" required />
              </div>
              <div className="line">
                <textarea cols="30" rows="50" placeholder="Descrição" required />
              </div>

              <button className="cadastro">Cadastrar</button>
            </Form>
          </ServiceRegister>
        }
      </FormRegister>

    </Container>
  )
}

export default Register;