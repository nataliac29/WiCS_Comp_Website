import React from 'react'
import {
  Subtitle, Subheading, Description,
} from './styles'
import 'bootstrap/dist/css/bootstrap.css'
import './resources_buttons.css'

const CareerResources = () => (
  <div>
    <Subtitle>Career Opportunities</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '650px',
    }}
    />
    <Subheading name="career_paths">Career Paths</Subheading>
    <Description>
      There are a variety of paths that many people take after (or during) college, including
      pursuing grad school,traveling, taking time off, creating startups, academic research,
      or finding an industry job. WiCS has compiled info on some of these options in a shared
      google folder, and you can find specific pages here:
      <br />
      <a
        href="https://drive.google.com/drive/folders/1gprMZ-SLjrzwnml75UPxjR72-88vFkLb?usp=sharing"
        className="resources_button"
      >
        WiCS Resources Folder
      </a>
    </Description>


    <Subheading name="referrals">Referrals</Subheading>
    <Description>
      A few WiCS members have volunteered to give referrals or pass along information about
      previous places they have worked at. They have included the materials they need from
      members if they would like to get a referral or recieve more information:
      <br />
      <a
        href="https://docs.google.com/spreadsheets/d/1k0U2-VWoXeoWypOv5-AQYoWf3C7P5wDbNjcd9T44oYU/edit?usp=sharing"
        className="resources_button"
      >
        Referrals
      </a>

    </Description>

    <Subheading name="internship_opportunities">Internships Opportunities</Subheading>
    <Description>
      Are you a freshman or sophomore looking for an internship? WiCS has compiled a list of
      companies with programs aimed towards first and second year students. We have also uploaded
      slides from presentations for those who are interested in Product Management, as well as the
      WiCS technical recruiting guide.
      <br />
      <a
        href="https://drive.google.com/drive/folders/1ZMXvgv3YYduuUpwU9CdYqvuP6dfyyAuv?usp=sharing"
        className="resources_button"
      >
        Career: Software Engineering and PM Folder
      </a>

    </Description>
  </div>
)

export default CareerResources
