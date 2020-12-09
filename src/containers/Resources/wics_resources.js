import React from 'react'
import { Subtitle, Subheading, Description } from './styles'

const WicsResources = () => (
  <div>
    <Subtitle>Resources from WiCS</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '600px',
    }}
    />
    <Subheading name="mentorships">Mentorship</Subheading>
    <Description>
      Each year, WiCS organizes a mentorship program designed to match students who are
      interested in CS with upperclassmen mentors. WiCS will sponsor an activity between
      mentors and metees each month. This is a low and flexible time commitment, where you
      can get advice about classes, concentrations, internships, and build strong relationships
      with upperclass students and others in the WiCS community. That’s right, FREE FOOD,
      FRIENDSHIP, AND ADVICE on your own schedule!
    </Description>

    <Subheading name="leadership_opportunities">Leadership Opportunities</Subheading>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Description>

  </div>
)

export default WicsResources
