import React, { useState, useEffect } from 'react';
import {useLocation, useHistory} from 'react-router-dom'
import api from '../../services/api'

import { Container, Form, Table } from './styles'

import Modal from '../../components/Modal'
import Error from '../../components/Error'

const UserEdit = (props) => {
  const history = useHistory();
  const location = useLocation();
// eslint-disable-next-line
  const [success, setSuccess] = useState(false)
  // eslint-disable-next-line
  const [showUser, setShowUser] = useState(false)
 
  
  // User 
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [cpff, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [typeUser, setTypeUser] = useState('')

  const getUser = async () => {
    const response = await api.get(`/users/${location.state.userId}`);
    const user = response.data
    setId(user._id);
    setName(user.name);
    setCpf(user.cpf);
    setPassword(user.password);
    setAddress(user.address);
    setNumber(user.number);
    setTypeUser(user.typeuser);
  }

  const handdlUpdateUser = async (e) => {
    e.preventDefault()
// eslint-disable-next-line
    const response = await api.put(`/users/${id}`, {
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
  // const setService = () => {
  //   setShowUser(false)
  // }

  // const setUser = () => {
  //   setShowUser(true)
  // }

  const closeModel = () => {
    setSuccess(false)
    history.push('/users');
  }

  const navigateBack = () => {
    history.push('/users');
  }

  useEffect(() => {
    getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return(
    <Container>
      {success === true ? <Modal close={closeModel} title="Atualizado com sucesso" /> : ''}
      <button className="voltar" onClick={navigateBack}>Voltar</button>
      <Table>
        <h1>Editar Usuário</h1>
        <Form onSubmit={handdlUpdateUser}>
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