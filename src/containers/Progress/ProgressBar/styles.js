import React from 'react'
import { styled } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'

export const TableStyle = styled(({ ...rest }) => <Table {...rest} />)({
  fontFamily: [
    'Montserrat',
    'sans-serif',
  ].join(','),
  fontWeight: 600,
  letterSpacing: '2px',
  lineHeight: '1em',
  color: 'blue',
})
