import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'proptypes'

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route 
      {...rest}  
      component={ (props) => (
        ( isAuthenticated )
          ? ( <Redirect to="/" /> )
          : (<Component {...props} />)
      )}
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}