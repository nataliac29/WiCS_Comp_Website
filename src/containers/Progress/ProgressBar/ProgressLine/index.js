import React from 'react'
import './progressline.css'

const ProgressLine = ({ done }) => {
  const [style, setStyle] = React.useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    }
    setStyle(newStyle)
  }, 1000)

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}
        %
      </div>
    </div>
  )
}
// , { useEffect, useState }
// const ProgressLine = ({
//   label,
//   backgroundColor = '#e5e5e5',
//   // expected format for visual parts
//   visualParts = [
//     {
//       percentage: '0%',
//       color: 'white',
//     },
//   ],
// }) => {
//   // Starting values needed for the animation
//   // Mapped by "visualParts" so it can work with multiple values dynamically
//   // It's an array of percentage widths
//   const [widths, setWidths] = useState(
//     visualParts.map(() => 0),
//   )

//   useEffect(() => {
//     // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//     // You need to wrap it to trigger the animation
//     requestAnimationFrame(() => {
//       // Set a new array of percentage widths based on the props
//       setWidths(
//         visualParts.map(item => item.percentage),
//       )
//     })
//   }, [visualParts])

//   return (
//     <div>
//       <div className="progressLabel">{label}</div>
//       <div
//         className="progressVisualFull"
//                 // to change the background color dynamically
//         style={{
//           backgroundColor,
//         }}
//       >
//         {visualParts.map((item, index) => (
//           // map each part into separate div and each will be animated
//           // because of the "transition: width 2s;" css in class "progressVisualPart"
//           // and because of the new width ("widths[index]", previous one was 0)

//           <div
//           // There won't be additional changes in the array so the index can be used
//           /* eslint-disable-next-line react/no-array-index-key */
//             key={index}
//             style={{
//               width: widths[index],
//               // setting the actual color of bar part
//               backgroundColor: item.color,
//               display: 'flex',
//               alignItems: 'center',
//               textAlign: 'center',
//               justifyContent: 'center',
//               borderLeft: 'thin solid darkgray',
//               fontFamily: "'Roboto', sans-serif",
//               fontWeight: 'medium',
//               letterSpacing: '2px',
//               lineHeight: '1em',
//             }}
//             className="progressVisualPart"
//           >
//             {item.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export default ProgressLine
