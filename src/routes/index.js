import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages 
import Login from '../pages/Login'
import Register from '../pages/Register'
import ListServices from '../pages/ListServices';
import ServiceEdit from '../pages/ServiceEdit';
import ListUsers from '../pages/ListUsers';
import UserEdit from '../pages/UserEdit';


const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register"  component={Register}/>
        <Route path="/services"  component={ListServices}/>
        <Route path="/service"  render={(props) => <ServiceEdit {...props} />}/>
        <Route path="/users"  component={ListUsers}/>
        <Route path="/user"  render={(props) => <UserEdit {...props} />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router