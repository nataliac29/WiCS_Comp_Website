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
// import PropTypes from 'prop-types';

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

const Row = ({ data, data3 }) => {
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()
  const date = new Date(data.datetime)
  var options = {
    timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
    hour12: true
  };
  const largeDate = Intl.DateTimeFormat('en', options).format(date)
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
        <TableCell align="left">{largeDate}</TableCell>
        <TableCell align="left">{data.des}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Your Submission
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Submitted Description</TableCell>
                    <TableCell align="right">Submitted Photo</TableCell>
                    <TableCell align="right">Submitted At </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    (data3.filter(eid => eid.eventId === data.id)).map(historyRow => {
                      const d = new Date(historyRow.addedAt)
                      var options = {
                        timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
                        hour12: true
                      };
                      const newDate = Intl.DateTimeFormat('en', options).format(d)
                      return (
                        <TableRow key={historyRow.id}>
                          <TableCell component="th" scope="row">
                            {historyRow.des}
                          </TableCell>
                          <TableCell>{historyRow.photo}</TableCell>
                          <TableCell align="right">{newDate}</TableCell>
                        </TableRow>
                      )
                    })
                  }
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
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }} />
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

        <div style={{ width: '30%' }} />
      </div>


    </ThemeProvider>
    <br />
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
