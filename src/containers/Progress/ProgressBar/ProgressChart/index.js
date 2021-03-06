import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
// import Box from '@material-ui/core/Box'
// import Collapse from '@material-ui/core/Collapse'
// import IconButton from '@material-ui/core/IconButton'
// import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
// import { Welcome } from '../styles'
import { TableStyle } from './styles'
import Emoji from '../../emojis'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    fontWeight: 600,
    letterSpacing: '2px',
    lineHeight: '1em',
  },
})

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

const Row = ({ data }) => {
  // const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>{data.category}</TableCell>
        <TableCell>{(data.status === 'true') ? <Emoji symbol="✅" label="complete" /> : <Emoji symbol="❌" label="incomplete" />}</TableCell>
        <TableCell>{data.complete}</TableCell>
        <TableCell>{data.required}</TableCell>
      </TableRow>
    </>
  )
}

const ProgressChart = ({ data1 }) => (
  <ThemeProvider theme={theme}>
    <div style={{ marginBottom: '2vh' }}>
      <link
        rel="stylesheet"
        href="https://fonts.google.com/specimen/Inter?query=inter"
      />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }} />
        <TableContainer component={Paper}>
          <TableStyle style={{ letterSpacing: '.05em' }}>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>Required</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.map(data => (
                <Row id={data.id} data={data} />
              ))}
            </TableBody>
          </TableStyle>
        </TableContainer>
        <div style={{ width: '30%' }} />
      </div>
    </div>
  </ThemeProvider>
)


export default ProgressChart
