import React, {useState, useEffect} from 'react'
import { Container, Table } from './styles'
import api from '../../services/api';

import logo from '../../assets/logo.png'

const ListUsers = ({ history }) => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const responde = await api.get('/users');
    setUsers(responde.data);
  }

  const handleDeleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`);
    alert('Usuario deletado com sucesso!');
    getUsers();
  }

  const navigateBack = () => {
    history.push('/register');
  }

  const navigateToUserEdit = (id) => {
    history.push('/user', {userId: id});
  }

  useEffect(() => {
    getUsers();
  }, [])


  return(
    <Container>
      <img src={logo} alt=""/>
      <Table>
        <button onClick={navigateBack}>Voltar</button>
        <ul className="title">
          <li>Nome</li>
          <li>CPF</li>
          <li>Endereço</li>
          <li>Número</li>
          <li>Tipo de Usuário</li>
          <li>Ação</li>
        </ul>
        {
          users.map(user => {
            return (
              <ul>
                <li>{user.name}</li>
                <li>{user.cpf}</li>
                <li>{user.address}</li>
                <li>{user.number}</li>
                <li>{user.typeuser}</li>
                <li class="action">
                  <button className="edit" onClick={() => {navigateToUserEdit(user._id)}}>Editar</button>
                  <button className="delete" onClick={() => {handleDeleteUser(user.cpf)}}>Deletar</button>
                </li>
              </ul>
            )
          })
        
        }
        {/* <ul>
          <li>Gabriel</li>
          <li>49514232860</li>
          <li>Rua Jose</li>
          <li>173</li>
          <li>client</li>
          <li class="action">
            <button className="edit">Editar</button>
            <button className="delete">Deletar</button>
          </li>
        </ul> */}
        
      </Table>
    </Container>
  )
}

export default ListUsers