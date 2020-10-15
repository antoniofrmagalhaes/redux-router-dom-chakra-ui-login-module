import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/password/forgot" component={ForgotPassword} />
      <Route path="/password/reset/:token" component={ResetPassword} />
    </Switch>
  )
}

export default Routes
