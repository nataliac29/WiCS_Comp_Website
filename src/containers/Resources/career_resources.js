import React from 'react'
import {
  Subtitle, Subheading, Description, Button,
} from './styles'

const CareerResources = () => (
  <div>
    <Subtitle>Career Opportunities</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '650px',
    }}
    />
    <Subheading>Career Paths</Subheading>
    <Description>
      There are a variety of paths that many people take after (or during) college, including
      pursuing grad school,traveling, taking time off, creating startups, academic research,
      or finding an industry job. WiCS has compiled info on some of these options in a shared
      google folder, and you can find specific pages here:

    </Description>
    <Button>
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.5em',
          marginBottom: '5vh',
        }}
        target="wics mentorship"
        href="https://drive.google.com/drive/folders/1gprMZ-SLjrzwnml75UPxjR72-88vFkLb?usp=sharing"
      >
        WiCS Resources Folder
      </a>
    </Button>

    <Subheading>Referrals</Subheading>
    <Description>
      A few WiCS members have volunteered to give referrals or pass along information about
      previous places they have worked at. They have included the materials they need from
      members if they would like to get a referral or recieve more information:

    </Description>
    <Button>
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.5em',
          marginBottom: '5vh',
        }}
        target="wics mentorship"
        href="https://docs.google.com/spreadsheets/d/1k0U2-VWoXeoWypOv5-AQYoWf3C7P5wDbNjcd9T44oYU/edit?usp=sharing"
      >
        Referrals
      </a>
    </Button>

    <Subheading>Internships Opportunities</Subheading>
    <Description>
      Are you a freshman or sophomore looking for an internship? WiCS has compiled a list of
      companies with programs aimed towards first and second year students. We have also uploaded
      slides from presentations for those who are interested in Product Management, as well as the
      WiCS technical recruiting guide.

    </Description>
    <Button>
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.5em',
          marginBottom: '5vh',
        }}
        target="wics mentorship"
        href="https://drive.google.com/drive/folders/1ZMXvgv3YYduuUpwU9CdYqvuP6dfyyAuv?usp=sharing"
      >
        Career: Software Engineering and PM Folder
      </a>
    </Button>
  </div>
)

export default CareerResources
