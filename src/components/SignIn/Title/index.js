import React from 'react'
import {
  Title as TitleText,
} from './styles'


const Title = ({
  children, color, fontWeight, fontSize, margin,
}) => (
  <TitleText color={color} fontWeight={fontWeight} fontSize={fontSize} margin={margin}>
    {children}
  </TitleText>
)

export default Title
