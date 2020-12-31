import React from 'react'
import {
  Subtitle, Subheading, Description,
} from './styles'
import Mentorship from './csmentorship.png'
import 'bootstrap/dist/css/bootstrap.css'
import './resources_buttons.css'

const WicsResources = () => (
  <div>
    <Subtitle className="subtitle">Resources from WiCS</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '650px',
    }}
    />
    <Subheading name="mentorships" className="subheading">Mentorship</Subheading>
    <Description class="flex flex-row" className="description" style={{ display: 'flex' }}>
      <div>
        Each year, WiCS organizes a mentorship program designed to match students who are
        interested in CS with upperclassmen mentors. WiCS will sponsor an activity between
        mentors and mentees each month. This is a low and flexible time commitment, where you
        can get advice about classes, concentrations, internships, and build strong relationships
        with upperclassmen students and others in the WiCS community. It&apos;s FREE FOOD,
        FRIENDSHIP, AND ADVICE on your own schedule!

        This mentorship program is one of the largest on campus--over 200 women in tech participate
        and have said that WiCS mentorship has been an incredibly beneficial experience.
        <br />
        <a href="https://www.harvardwics.com/mentorships" className="resources_button">
          Read More and Sign Up
        </a>
      </div>
      <div>
        <img
          alt="mentorship"
          src={Mentorship}
          style={{
            width: '30vw', height: 'undefined', aspectRatio: '3', marginLeft: '5vw', marginTop: '4vh',
          }}
        />
      </div>
    </Description>
  </div>
)
export default WicsResources
