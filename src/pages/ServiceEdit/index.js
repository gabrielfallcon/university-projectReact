import React, { useState } from 'react';
import api from '../../services/api'

import { Container, Form, Table } from './styles'

import Modal from '../../components/Modal'
import Error from '../../components/Error'

const ServiceEdit = ({ history }) => {
  const [success, setSuccess] = useState(false)
  const [showUser, setShowUser] = useState(false)
 

  const [nameService, setNameService] = useState('')
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState('')

  const handdlRegisterService = async (e) => {
    e.preventDefault();
   
    setSuccess(true);
    setFile(null);
    setNameService('');
    setDescription('');
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

              <button className="cadastro">Salvar</button>
            </Form>
        
      </Table>
    </Container>
  )
}

export default ServiceEdit