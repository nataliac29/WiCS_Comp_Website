import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { Welcome } from '../styles'


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
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

const Row = ({ data, data3 }) => {
  console.log('start')
  console.log(data)
  console.log('end')
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {data.eventname}
        </TableCell>
        <TableCell align="left">{data.type}</TableCell>
        <TableCell align="left">{data.datetime}</TableCell>
        <TableCell align="left">{data.des}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Your Submission
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Submitted Description</TableCell>
                    <TableCell align="left">Submitted Photo</TableCell>
                    <TableCell align="left">Submitted At </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(data3.filter(eid => eid.eventId === data.id)).map(ci => (
                    <TableRow key={ci.id}>
                      <TableCell />
                      <TableCell component="th" scope="row">
                        {ci.des}
                      </TableCell>
                      <TableCell align="left">{ci.photo}</TableCell>
                      <TableCell align="left">{ci.addedAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const EventTable = ({ data1, data3 }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <ThemeProvider theme={theme}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
      />
      <Welcome style={{
        fontSize: '2em', color: 'white', paddingTop: '2vh', paddingBottom: '3vh', backgroundColor: '#e26355', paddingLeft: '5vw', marginLeft: '0vw', fontFamily: 'Permanent Marker, cursive', fontWeight: 'light',
      }}
      >
        Events you&apos;ve attended:
      </Welcome>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '2vw' }} />
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Event Name</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Date and Time</TableCell>
                <TableCell align="left">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.map(data => (
                <Row id={data.id} data={data} data3={data3} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ width: '2vw' }} />
      </div>
    </ThemeProvider>
  </div>
)


export default EventTable
/*
{
  data.userEvents.map(({
    id, eventname, type, datetime, des,
  }) => (
      <EventTable key={id} eventname={eventname} type={type} dateTime={datetime} des={des} />
    ))
}


import {
  Table, Header, Row, Cell
} from './styles'


const EventTable = ({
  data1
}) => (

)
export default EventTable


*/
