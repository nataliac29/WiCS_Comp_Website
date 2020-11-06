import React from 'react'

import { InputStyle } from './styles'

const Input = ({
  value, setValue, password, placeholder,
}) => (
  <InputStyle
    id={password ? 'standard-password-input' : 'standard-basic'}
    type={password ? 'password' : 'text'}
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder={placeholder}
  />
)

export default Input
