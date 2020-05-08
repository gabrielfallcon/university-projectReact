import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages 
import Login from '../pages/Login'
import Register from '../pages/Register'


const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register"  component={Register}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router