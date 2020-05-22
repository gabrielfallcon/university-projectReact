import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages 
import Login from '../pages/Login'
import Register from '../pages/Register'
import ListServices from '../pages/ListServices';
import ListUsers from '../pages/ListUsers';


const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register"  component={Register}/>
        <Route path="/services"  component={ListServices}/>
        <Route path="/users"  component={ListUsers}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router