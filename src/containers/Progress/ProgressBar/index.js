import React from 'react'
import { Welcome, ProgressContainer } from '../styles'
import ProgressLine from './ProgressLine'
import ProgressChart from './ProgressChart'
// import './progressline.css'

const PBar = ({ trackEvents, percentage }) => {
  const smallSocial = trackEvents.filter(el => el.event.type === 'SmallSocial').length
  const largeSocial = trackEvents.filter(el => el.event.type === 'LargeSocial').length
  const sponsorship = trackEvents.filter(el => el.event.type === 'Sponsorship').length
  const educational = trackEvents.filter(el => el.event.type === 'Eductional').length

  const Additional = () => {
    const addSS = smallSocial > 0 ? smallSocial - 1 : 0
    const addLS = largeSocial > 0 ? largeSocial - 1 : 0
    const addSp = sponsorship > 0 ? sponsorship - 1 : 0
    const addEd = educational > 0 ? educational - 1 : 0
    const totaladd = addSS + addLS + addSp + addEd
    return totaladd
  }

  return (
    <div>
      <Welcome style={{
        fontSize: '35px',
        lineHeight: '1',
        fontWeight: '900',
        color: '#e36055',
        letterSpacing: '-0.03em',
        paddingTop: '2vh',
        paddingBottom: '3vh',
        paddingLeft: '5vw',
        marginLeft: '0vw',
        fontFamily: 'Montserrat, sans-serif',
        WebkitFontSmoothing: 'antialiased',
      }}
      >
        Your Progress So Far:
      </Welcome>
      <ProgressContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProgressLine done={percentage} />
        </div>
        <div>
          <ProgressChart
            data1={[
              {
                category: 'Small Social', status: smallSocial ? 'true' : 'false', complete: smallSocial, required: 1,
              },
              {
                category: 'Large Social', status: largeSocial ? 'true' : 'false', complete: largeSocial, required: 1,
              },
              {
                category: 'Sponsorship', status: sponsorship ? 'true' : 'false', complete: sponsorship, required: 1,
              },
              {
                category: 'Educational', status: educational ? 'true' : 'false', complete: educational, required: 1,
              },
              {
                category: 'Additional', status: Additional() ? 'true' : 'false', complete: Additional(), required: 2,
              },
            ]}
            isDark
            bordered
            striped
            hoverable
          />
        </div>
      </ProgressContainer>
    </div>


  )
}
export default PBar
