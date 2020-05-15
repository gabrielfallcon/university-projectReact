import React, { useState } from 'react';
import { cpf } from 'cpf-cnpj-validator'

import api from '../../services/api'


import Modal from '../../components/Modal'
import Error from '../../components/Error'

import { Container, TypeRegister, FormRegister, UserRegister, ServiceRegister, Form } from './styles';

const Register = ({ history }) => {
  const [success, setSuccess] = useState(false)
  const [showUser, setShowUser] = useState(false)
  
  // User 
  const [name, setName] = useState('')
  const [cpff, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [typeUser, setTypeUser] = useState('admin')

  // Service  
  const [nameService, setNameService] = useState('')
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState('')

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

  const handdlRegisterService = async (e) => {
    e.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('imageService', file);
    data.append('name', nameService);
    data.append('description', description);

    
    const response = await api.post('services', data ,{
      headers: {user_id: user_id},
    });
   
    setSuccess(true);
    setFile(null);
    setNameService('');
    setDescription('');
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
        {showUser === true
          ?
          <UserRegister>
            <h1>Cadastro de Usuário</h1>
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
              {!cpf.isValid(cpff) && cpff.length >= 11 ? <Error error="CPF invalido" /> : ''}
              <div className="line">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="senha" placeholder="Senha" required />
              </div>
              <div className="line">
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="endereco" placeholder="Endereço" required />
                <input type="text" value={number} onChange={e => setNumber(e.target.value)} className="numero" placeholder="Numero" required />
              </div>
              {/* <button>Add Endereço</button> */}
              <button type="submit" className="cadastro">Cadastrar</button>
            </Form>
          </UserRegister>
          :
          <ServiceRegister>
            <h1>Cadastro de Serviço</h1>
            <Form onSubmit={handdlRegisterService}>
              <div className="line">
                <input type="text" value={nameService} onChange={e => setNameService(e.target.value)}placeholder="Nome" required />
              </div>
              <div className="line">
                <input type="file" onChange={e => setFile(e.target.files[0])} className="file" placeholder="Anexar arquivo" required />
              </div>
              <div className="line">
                <textarea cols="30" value={description} onChange={e => setDescription(e.target.value)} rows="50" placeholder="Descrição" required />
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