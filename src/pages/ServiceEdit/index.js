import React, { useState, useEffect } from 'react';
import {useLocation, useHistory} from 'react-router-dom'
import api from '../../services/api'

import { Container, Form, Table } from './styles'

import Modal from '../../components/Modal'
import Error from '../../components/Error'

const ServiceEdit = (props) => {
  const history = useHistory();
  const location = useLocation();

  const [success, setSuccess] = useState(false)
  const [showUser, setShowUser] = useState(false)
 

  const [nameService, setNameService] = useState('')
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState('')

  const getService = async () => {
    const response = await api.get(`/services/${location.state.serviceId}`);
    setNameService(response.data.name);
    setDescription(response.data.description);
  }

  const handdlUpdateService = async (e) => {
    e.preventDefault();

    const data = new FormData();

    if(file) {
      data.append('imageService', file);
    }
    data.append('name', nameService);
    data.append('description', description);

    const response = await api.put(`/services/${location.state.serviceId}`, data)
   
    setSuccess(true);
    setFile(null);
    setNameService('');
    setDescription('');
  }

  const closeModel = () => {
    setSuccess(false)
    history.push('/services');
  }

  const navigateBack = () => {
    history.push('/services');
  }

  useEffect(() => {
    getService();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <Container>
      {success === true ? <Modal close={closeModel} title="Atualizado com sucesso" /> : ''}
      <button className="voltar" onClick={navigateBack}>Voltar</button>
      <Table>
        <h1>Editar Serviço</h1>
        <Form onSubmit={handdlUpdateService}>
              <div className="line">
                <input type="text" value={nameService} onChange={e => setNameService(e.target.value)}placeholder="Nome" required />
              </div>
              <div className="line">
                <input type="file" onChange={e => setFile(e.target.files[0])} className="file" placeholder="Anexar arquivo" />
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