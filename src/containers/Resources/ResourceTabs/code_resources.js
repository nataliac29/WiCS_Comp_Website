import React from 'react'
import {
  Subtitle, Subheading, Description,
} from '../styles'
import 'bootstrap/dist/css/bootstrap.css'
import './resources_buttons.css'

const CodeResources = () => (
  <div>
    <Subtitle className="subtitle">Coding Resources</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '600px',
    }}
    />
    <Subheading name="coding_practice" className="subheading">Coding Practice</Subheading>
    <Description className="description">
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

    <Subheading name="interview_prep" className="subheading">Technical Interview Prep</Subheading>
    <Description className="description">
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
      <br />
      <a
        href="https://docs.google.com/document/d/16HVtQ0bYrUdthIorEOS47w71rKh9WEGaa6wsj3OJr8o/edit?usp=sharing"
        className="resources_button"
      >
        2019 Technical Recruiting Guide
      </a>
    </Description>
  </div>
)
export default CodeResources
