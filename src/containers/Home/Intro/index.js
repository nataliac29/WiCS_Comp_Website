import React from 'react'
import { Link } from 'react-scroll'
import {
  Welcome, Paragraph, Intro, Arrow,
} from './styles'
import Women from './women.jpg'
import DownArrow from './arrowdown.png'

const Body = () => (
  <div>
    <Intro>
      <div>
        <Welcome> Welcome to WiCS&apos;s Comp Tracker</Welcome>
        <Paragraph>
          We are so excited you are comping WiCS! You can use this website to
          keep track of your progress towards becoming a member.
        </Paragraph>
        <Paragraph>
          Scroll on to learn more about WiCS!
        </Paragraph>
      </div>
      <img
        alt="diverse women together"
        src={Women}
        style={{
          width: '38vw', height: 'undefined', aspectRatio: '3',
        }}
      />
    </Intro>
    <Link to="intro" smooth>
      <Arrow
        alt="down arrow"
        src={DownArrow}
        style={{
          width: '2vw', height: 'undefined', aspectRatio: '1', marginLeft: '50vw',
        }}
      />
    </Link>
  </div>
)
export default Body
