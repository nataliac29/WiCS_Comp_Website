import React from 'react'
import { Subtitle, Subheading, Description } from './styles'

const CareerResources = () => (
  <div>
    <Subtitle>Career Opportunities</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '600px',
    }}
    />
    <Subheading name="resume_drops">Resume Drops</Subheading>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Description>

    <Subheading name="networking">Networking</Subheading>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Description>

    <Subheading name="job_openings">Job Openings</Subheading>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi
      sunt in culpa qui officia deserunt mollit anim id est laborum
    </Description>
  </div>
)

export default CareerResources
