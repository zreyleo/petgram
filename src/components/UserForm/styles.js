import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  &[disabled] {
    opacity: .3;
  }
`

export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;

`
