import React, {useState, useEffect} from 'react'
import { Container, Table } from './styles'
import api from '../../services/api'

import logo from '../../assets/logo.png'

const ListServices = ({ history }) => {

  const [services, setServices] = useState([]);

  const getServices = async () => {
    const response = await api.get('/services');
    setServices(response.data);
  }

  const handleDeleteService = async (id) => {
    const response = await api.delete(`/services/${id}`);
    alert('Serviço deletado com sucesso!');
    getServices();
  }

  const navigateBack = () => {
    history.push('/register');
  }

  const navigateToServiceEdit = (id) => {
    history.push('/service', {
      serviceId: id
    })
  }

  useEffect(() => {
    getServices();
  }, [])

  // const ListServices = () => {
  //   const listItems = services.map(service => {
  //       <ul>

  //       </ul>
  //   })
  // }

  return(
    <Container>
      <img src={logo} alt=""/>
      <Table> 
        <button onClick={navigateBack}>Voltar</button>
        <ul className="title">
          <li>Nome</li>
          <li>Descrição</li>
          <li>Ação</li>
        </ul>

        {
          services.map(service => {
            return (
              <ul>
                <li>{service.name}</li>
                <li>{service.description}</li>
                <li class="action">
                  <button className="edit" onClick={() => {navigateToServiceEdit(service._id)}}>Editar</button>
                  <button className="delete" onClick={() => {handleDeleteService(service._id)}}>Deletar</button>
                </li>
              </ul>
            )
          })
        }
      </Table>
    </Container>
  )
}

export default ListServices