import React from 'react'
import {
  Subtitle, Subheading, Description, Button,
} from './styles'
import Mentorship from './csmentorship.png'

const WicsResources = () => (
  <div>
    <Subtitle>Resources from WiCS</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '650px',
    }}
    />
    <Subheading name="mentorships">Mentorship</Subheading>
    <Description class="flex flex-row">
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
        <Button>
          <a
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.5em',
            }}
            target="wics mentorship"
            href="https://www.harvardwics.com/mentorships"
          >
            Read More and Sign Up
          </a>
        </Button>

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


    {/* <Subheading>Leadership Opportunities</Subheading>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Description> */}

  </div>
)
export default WicsResources
