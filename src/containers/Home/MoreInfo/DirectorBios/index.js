import React from 'react'
import { Link } from 'react-scroll'
import {
  Directors, Cards, Intro, Bio, Arrow, Whitebox, Title,
} from './styles'
import Vicki from './Vicki.jpeg'
import Jacinta from './Jacinta.png'
import Carolyn from './Carolyn.jpeg'
import Rose from './Rose.jpeg'
import DownArrow from './arrowdown.png'

const DBios = () => (
  <div>
    <Intro style={{ textAlign: 'center' }} name="intro"> Meet your Comp Directors! </Intro>
    <Whitebox>
      <Directors>
        <Cards>
          <Title>Jacinta Olonilua &apos;23</Title>
          <Bio>
            <img
              alt="Jacinta"
              src={Jacinta}
              style={{
                width: 'undefined', height: '20vw', aspectRatio: '3', alignSelf: 'center',
              }}
            />
            <p>Short bio for Jacinta and email address</p>
          </Bio>
        </Cards>
        <Cards>
          <Title>Vicki Xu &apos;22</Title>
          <Bio>
            <img
              alt="Vicki"
              src={Vicki}
              style={{
                width: 'undefined', height: '20vw', aspectRatio: '3', alignSelf: 'center',
              }}
            />
            <p>Short bio for Vicki and email address</p>
          </Bio>
        </Cards>
      </Directors>
    </Whitebox>

    <Intro style={{ textAlign: 'center' }} name="intro"> Meet your WiCS Directors! </Intro>
    <Whitebox>
      <Directors>
        <Cards>
          <Title>Carolyn Ge &apos;22</Title>
          <Bio>
            <img
              alt="Carolyn"
              src={Carolyn}
              style={{
                width: '20vw', height: 'undefined', aspectRatio: '3', alignSelf: 'center',
              }}
            />
            <p>Short bio for Carolyn and email address</p>
          </Bio>
        </Cards>
        <Cards>
          <Title>Rose Hong &apos;22</Title>
          <Bio>
            <img
              alt="Rose"
              src={Rose}
              style={{
                width: '20vw', height: 'undefined', aspectRatio: '3', alignSelf: 'center',
              }}
            />
            <p>Short bio for Rose and email address</p>
          </Bio>
        </Cards>
      </Directors>
    </Whitebox>

    <Link to="/CompInfo" smooth>
      <Arrow
        alt="down arrow"
        src={DownArrow}
        style={{
          width: 'undefined', height: '3vh', aspectRatio: '1', marginLeft: '50vw', cursor: 'pointer',
        }}
      />
    </Link>
  </div>
)
export default DBios
