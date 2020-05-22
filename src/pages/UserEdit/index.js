import React, { useState } from 'react';
import api from '../../services/api'

import { Container, Form, Table } from './styles'

import Modal from '../../components/Modal'
import Error from '../../components/Error'

const UserEdit = ({ history }) => {
  const [success, setSuccess] = useState(false)
  const [showUser, setShowUser] = useState(false)
 
  
  // User 
  const [name, setName] = useState('')
  const [cpff, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [typeUser, setTypeUser] = useState('admin')

  const handdlRegisterUser = async (e) => {
    e.preventDefault()

    const response = await api.post('sessions', {
      name,
      cpf: cpff,
      password,
      address,
      number,
      typeuser: typeUser
    });

    setSuccess(true)

    setName('')
    setCpf('')
    setPassword('')
    setAddress('')
    setNumber('')
    setTypeUser('')
  }
  const setService = () => {
    setShowUser(false)
  }

  const setUser = () => {
    setShowUser(true)
  }

  const closeModel = () => {
    setSuccess(false)
  }

  const logoff = () => {
    localStorage.removeItem('user');
    history.push('/')
  }


  return(
    <Container>
      <button className="voltar">Voltar</button>
      <Table>
        <h1>Editar Usuário</h1>
        <Form onSubmit={handdlRegisterUser}>
              <div className="line">
                <select  value={typeUser} onChange={e => setTypeUser(e.target.value)} name="prestador" className="prestador" required>
                  <option value="admin">Admin</option>
                  <option value="prestador">Prestador</option>
                  <option value="cliente">Cliente</option>
                </select>
              </div>
              <div className="line">
                <input type="text" className="nome" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required />
                <input type="text" value={cpff} onChange={e => setCpf(e.target.value)} className="cpff" placeholder="CPF" required />
              </div>
              <div className="line">
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="senha" placeholder="Senha" required />
              </div>
              <div className="line">
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="endereco" placeholder="Endereço" required />
                <input type="text" value={number} onChange={e => setNumber(e.target.value)} className="numero" placeholder="Numero" required />
              </div>
              <button type="submit" className="cadastro">Salvar</button>
            </Form>
        
      </Table>
    </Container>
  )
}

export default UserEdit