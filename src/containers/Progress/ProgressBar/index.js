import React from 'react'
import { Welcome, ProgressContainer } from '../styles'
import ProgressLine from './ProgressLine'
import ProgressChart from './ProgressChart'
// import './progressline.css'

const PBar = ({ data3 }) => {
  const ifSmallSocial = () => {
    const num = data3.filter(el => el.type === 'SmallSocial')
    if (num.length === 0) {
      return ({ color: '#e5e5e5', number: num.length, complete: 0 })
    }
    return ({ color: '#0abab5', number: num.length, complete: 1 })
  }
  const ifLargeSocial = () => {
    const num = data3.filter(el => el.type === 'LargeSocial')
    if (num.length === 0) {
      return ({ color: '#e5e5e5', number: num.length, complete: 0 })
    }
    return ({ color: '#0abab5', number: num.length, complete: 1 })
  }
  const ifSponsorship = () => {
    const num = data3.filter(el => el.type === 'Sponsorship')
    if (num.length === 0) {
      return ({ color: '#e5e5e5', number: num.length, complete: 0 })
    }
    return ({ color: '#0abab5', number: num.length, complete: 1 })
  }
  const ifEducational = () => {
    const num = data3.filter(el => el.type === 'Educational')
    if (num.length === 0) {
      return ({ color: '#e5e5e5', number: num.length, complete: 0 })
    }
    return ({ color: '#0abab5', number: num.length, complete: 1 })
  }
  // const total = data3.length
  const ifAdditional = () => {
    const ESSocial = () => {
      const num = ifSmallSocial().number
      if (num > 1) {
        return (num - 1)
      }
      return 0
    }
    const ELSocial = () => {
      const num = ifLargeSocial().number
      if (num > 1) {
        return (num - 1)
      }
      return 0
    }
    const ELSpon = () => {
      const num = ifSponsorship().number
      if (num > 1) {
        return (num - 1)
      }
      return 0
    }
    const ELEdu = () => {
      const num = ifEducational().number
      if (num > 1) {
        return (num - 1)
      }
      return 0
    }
    const totaladd = ESSocial() + ELSocial() + ELSpon() + ELEdu()
    if (totaladd === 1) {
      return ({ color: '#0abab54D', number: totaladd, complete: 1 })
    }
    if (totaladd > 1) {
      return ({ color: '#0abab5', number: totaladd, complete: 2 })
    }
    return ({ color: '#e5e5e5', number: totaladd, complete: 0 })
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
          <ProgressLine done={
          ((ifSmallSocial().complete
            + ifLargeSocial().complete
            + ifSponsorship().complete
            + ifEducational().complete
            + ifAdditional().complete) / 0.06).toFixed(1)
        }
          />
        </div>
        <div>
          <ProgressChart
            data1={[
              {
                category: 'Small Social', status: (ifSmallSocial().complete === 1) ? 'true' : 'false', complete: ifSmallSocial().complete, required: 1,
              },
              {
                category: 'Large Social', status: (ifLargeSocial().complete === 1) ? 'true' : 'false', complete: ifLargeSocial().complete, required: 1,
              },
              {
                category: 'Sponsorship', status: (ifSponsorship().complete === 1) ? 'true' : 'false', complete: ifSponsorship().complete, required: 1,
              },
              {
                category: 'Educational', status: (ifEducational().complete === 1) ? 'true' : 'false', complete: ifEducational().complete, required: 1,
              },
              {
                category: 'Additional', status: (ifAdditional().complete === 2) ? 'true' : 'false', complete: ifAdditional().complete, required: 2,
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

// <div>
// <Welcome style={{
//   fontSize: '2em',
//   color: 'white',
//   paddingTop: '2vh',
//   paddingBottom: '3vh',
//   backgroundColor: '#e26355',
//   paddingLeft: '5vw',
//   marginLeft: '0vw',
//   fontFamily: 'Permanent Marker, cursive',
//   fontWeight: 'light',
// }}
// >
//   Your Progress So Far:
// </Welcome>
//   <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#e26355' }}>
//     <div style={{ width: '90%' }}>
//       <ProgressLine
//         visualParts={[
//           {
//             percentage: '15%',
//             color: ifSmallSocial().color,
//             name: 'Small Social',
//           },
//           {
//             percentage: '15%',
//             color: ifLargeSocial().color,
//             name: 'Large Social',
//           },
//           {
//             percentage: '15%',
//             color: ifSponsorship().color,
//             name: 'Sponsorship',
//           },
//           {
//             percentage: '15%',
//             color: ifEducational().color,
//             name: 'Educational',
//           },
//           {
//             percentage: '40%',
//             color: ifAdditional().color,
//             name: 'Additional',
//           },
//         ]}
//       />
//     </div>
//   </div>
//   <Welcome style={{
//     fontSize: '1em',
//     color: 'white',
//     paddingTop: '2.5vh',
//     paddingBottom: '3vh',
//     backgroundColor: '#e26355',
//     paddingLeft: '5vw',
//     marginLeft: '0vw',
//     paddingRight: '5vw',
//   }}
//   >
//     You&apos;ve attended
//     {' '}
//     {total}
//     {' '}
//     events—
//     {' '}
//     {ifSmallSocial().number}
//     {' '}
//     Small Social events,
//     {' '}
//     {ifLargeSocial().number}
//     {' '}
//     Large Social events,
//     {' '}
//     {ifEducational().number}
//     {' '}
//     Educational events, and
//     {' '}
//     {ifSponsorship().number}
//     {' '}
//     Sponsorship events. Remember that you need at least one event in every category,
//     and 2 additional events in any category.
//   </Welcome>
// </div>
