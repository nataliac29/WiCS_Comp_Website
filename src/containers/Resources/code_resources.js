import React from 'react'
import {
  Subtitle, Subheading, Description, Button,
} from './styles'

const CodeResources = () => (
  <div>
    <Subtitle>Coding Resources</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '600px',
    }}
    />
    <Subheading name="coding_practice">Coding Practice</Subheading>
    <Description>
      If you know of any online learning resources, feel free to add them to
      {' '}
      <a
        href="https://docs.google.com/spreadsheets/d/10IQWNZqgqQutqO3yZu5IVe9YYVr12foB7A_x_iu5lh0/edit?usp=sharing"
      >
        this document
      </a>
      . This is a live document where members can add sites that could be useful to others! Helpful
      sites
      {' '}
      <a href="https://www.codecademy.com/"> Codecademy</a>
      ,
      {' '}
      <a href="https://www.khanacademy.org/computing/computer-programming">Khan Academy</a>
      , and
      {' '}
      <a href="https://reactjs.org/tutorial/tutorial.html"> React</a>
      .
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

    <Subheading name="interview_prep">Technical Interview Prep</Subheading>
    <Description>
      WiCS&apos;s 2019 Technical Recruiting Guide has great resources for those who are looking
      to prep for upcoming technical interviews.
      {' '}
      <a href="leetcode.com">Leetcode</a>
      ,
      {' '}
      <a href="hackerrank.com">Hackerrank</a>
      ,
      and &quot;Cracking the Coding Interview&quot; by Gayle Laakman McDowell are also great
      resources for practice and review of CS concepts.
    </Description>

    <Button>
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.5em',
          marginBotton: '5vh',
        }}
        target="wics mentorship"
        href="https://drive.google.com/drive/folders/1ZMXvgv3YYduuUpwU9CdYqvuP6dfyyAuv?usp=sharing"
      >
        Career: Software Engineering and PM Folder
      </a>
    </Button>
  </div>
)
export default CodeResources
