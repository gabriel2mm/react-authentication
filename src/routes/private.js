import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashbord'
const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path='/' component={Dashboard}/>
    </Switch>
  )
}

export default PrivateRoutes;