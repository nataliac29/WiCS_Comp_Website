import React from 'react'
import { Subtitle, Subheading, Description } from './styles'
import GirlsWhoCode from './girlswhocode.png'
import WECode from './wecode.png'

const WomenCS = () => (
  <div>
    <Subtitle className="subheading">Women in CS</Subtitle>
    <hr style={{
      color: '#e36154', backgroundColor: '#e36154', height: 2, borderColor: '#e36154', width: '650px',
    }}
    />
    <Subheading name="girls_who_code" className="subheading">Girls Who Code</Subheading>
    <Description class="flex flex-row" className="description" style={{ display: 'flex' }}>
      <div>
        Harvard WiCS supports women interested in STEM
        through
        {' '}
        <a href="https://www.harvardwics.com/girls-who-code">Girls Who Code</a>
        , an organization
        aimed at closing the gender gap in technology by creating programs that educate, equip,
        and inspire young girls with computing skills they&apos;ll need in the 21st century.
        We offer a Summer Immersion Program, as well as a Girls Who Code club.
      </div>
      <div>
        <img
          alt="girls who code"
          src={GirlsWhoCode}
          style={{
            width: '30vw', height: 'undefined', aspectRatio: '3', marginLeft: '5vw', marginTop: '4vh',
          }}
        />
      </div>
    </Description>
    <Subheading name="WECode">WECode Conference</Subheading>
    <Description class="flex flex-row" className="description" style={{ display: 'flex' }}>
      <div>
        The
        {' '}
        <a href="https://www.harvardwecode.com/">WECode</a>
        {' '}
        (Women Engineers Code) Conference is an annual conference hosted by undergraduate
        women at Harvard. WECode&apos;s mission is to cultivate a supportive network of collegiate
        engineers and promote more female representation in the tech industry.
      </div>
      <div>
        <img
          alt="WECode"
          src={WECode}
          style={{
            width: '30vw', height: 'undefined', aspectRatio: '3', marginLeft: '5vw', marginTop: '4vh',
          }}
        />
      </div>
    </Description>
  </div>
)

export default WomenCS
