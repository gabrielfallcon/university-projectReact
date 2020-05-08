import React, { useState } from 'react';

import Modal from '../../components/Modal'
import Error from '../../components/Error'

import { Container, TypeRegister, FormRegister, UserRegister, ServiceRegister, Form } from './styles';

const Register = () => {
  const [typeUser, setTypeUser] = useState(true)
  const [success, setSuccess] = useState(false)

  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

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

  return (
    <Container>
        { success == true ? <Modal close={closeModel} title="Cadastrado com sucesso"/> : '' }
      <TypeRegister>
        <h1>Tipos de Cadastro</h1>
        <button onClick={setUser}>Usuário</button>
        <button onClick={setService}>Serviço</button>
      </TypeRegister>

      <FormRegister>
        { typeUser === true
          ?
          <UserRegister>
            <h1>Cadastro de Usuário</h1>
            <Form onSubmit={handdlRegister}>
              <div className="line">
                <select name="prestador" required>
                  <option value="prestador">Prestador</option>
                  <option value="cliente">Cliente</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="line">
                <input type="text" className="nome" placeholder="Nome" required />
                <input type="text" className="cpf" placeholder="CPF" required />
              </div>
              <div className="line">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="senha" placeholder="Senha" required />
                <input type="password" value={confirm}  onChange={(e) => setConfirm(e.target.value)} className="confirm" placeholder="Confirme a senha" required />
              </div>
                { password !== confirm ? <Error error="As senhas não batem"/> : '' }
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