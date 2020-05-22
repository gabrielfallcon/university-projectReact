import React, {useState, useEffect} from 'react'
import { Container, Table } from './styles'
import api from '../../services/api'

const ListServices = ({ history }) => {

  const [services, setServices] = useState([]);

  const getServices = async () => {
    const response = await api.get('/services');
    setServices(response.data);
  }

  const navigateBack = () => {
    history.push('/register');
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
                  <button className="edit">Editar</button>
                  <button className="delete">Deletar</button>
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