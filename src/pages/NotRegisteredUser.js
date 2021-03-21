import React, { Fragment } from 'react'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

import Context from '../Context'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ isAuth, activateAuth }) => {
          return (
            <Fragment>
              <RegisterMutation>
                {(register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario ya existe o ocurrio un problema'

                  return <UserForm disabled={loading} onSubmit={onSubmit} title="Registrarse" error={errorMsg} />
                }}
              </RegisterMutation>

              <LoginMutation>
                {(login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario no existe o password incorrecto'

                  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Iniciar Sesi&oacute;n" />
                }}
              </LoginMutation>
            </Fragment>
          )
        }
      }
    </Context.Consumer>
  )
}
