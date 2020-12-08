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
import Emoji from '../emojis'
import './progresschart.css'

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
        <TableCell >{data.category}</TableCell>
        <TableCell align='center'>{(data.status === 'true') ? <Emoji symbol="✅" label="complete" /> : <Emoji symbol="❌" label="incomplete" />}</TableCell>
        <TableCell align='center'>{data.complete}</TableCell>
        <TableCell align='center'>{data.required}</TableCell>
      </TableRow>
    </>
  )
}

const ProgressChart = ({ data1 }) => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
      />

      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', alignItems: 'center' }} />
        <TableContainer component={Paper}>
          <TableStyle>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell align='center'>Status</TableCell>
                <TableCell align='center'>Completed</TableCell>
                <TableCell align='center'>Required</TableCell>
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
