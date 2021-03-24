import React, { Fragment } from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, H2, Error } from './styles'

import { SubmitButton as Button } from '../SubmitButton'

export const UserForm = ({ error, onSubmit, title, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <H2>{title}</H2>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
