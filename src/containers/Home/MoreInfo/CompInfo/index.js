import React from 'react'
import {
  About, Cards, Intro, Bio, Title, Whitebox,
} from './styles'
import wics from './image.jpeg'
import comp from './comp.jpg'

const CompInfo = () => (
  <div>
    <Intro style={{ textAlign: 'center' }} name="intro"> Join Us! </Intro>
    <Whitebox>
      <About>
        <Cards>
          <Title>What is WiCS?</Title>
          <Bio>
            <p>
              Harvard Women in Computer Science is many things -
              an advocacy organization, a professional development network,
              and a supportive community of friends. Come join us!
            </p>
          </Bio>
          <img
            alt="wics"
            src={wics}
            style={{
              width: '30vw', height: 'undefined', aspectRatio: '3',
            }}
          />
        </Cards>
        <Cards>
          <Title>How to Comp WiCS</Title>
          <Bio>
            <p>
              Our comp is non-competitive and completion based.
              Compers are asked to attend 6 WiCS events before
              the end of the semester (or before the end of the academic year
              if you need more time) before becoming official WiCS members.
              There are additional restrictions about what kinds of events
              can count for comp - for example, we ask that you attend
              at least 1 &quot;Development&quot;, 1 &quot;Social&quot;,
              and 1 &quot;Sponsor&quot; event. We understand that
              you&apos;re busy and look forward to working with anyone who
              wants to comp to ensure they can meet comp requirements.
              You don&apos;t have to comp WiCS to be involved -
              most of our events are open to everyone of all identities
              and experiences in CS - but we highly encourage it as a way
              to learn about our organization and meet new people.
            </p>
          </Bio>
        </Cards>
        <Cards>
          <Title>How to Use the Comp Tracker</Title>
          <Bio>
            <p>
              Use this Comp Tracker to keep track of your comp progress!
              Make an account and submit photos and descriptions of events
              that you&apos;ve attended. You can check if your submissions
              have been approved and see what kinds of events you have left
              to attend. You can also find resources related to mentorship,
              career opportunities, coding resources, and more!
            </p>
          </Bio>
          <img
            alt="comp"
            src={comp}
            style={{
              width: '30vw', height: 'undefined', aspectRatio: '3',
            }}
          />
        </Cards>
      </About>
    </Whitebox>
  </div>
)

export default CompInfo
