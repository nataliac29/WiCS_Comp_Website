import React from 'react'
import {
  Directors, Cards, Intro, Bio,
} from './styles'
import Vicki from './Vicki.PNG'
import Jacinta from './Jacinta.jpg'

const DBios = () => (
  <div>
    <Intro style={{ textAlign: 'center' }} name="intro"> Meet your Comp Directors! </Intro>
    <Directors>
      <Cards>
        Jacinta Olonilua &apos;23
        <Bio>
          <img
            alt="diverse women together"
            src={Jacinta}
            style={{
              width: '20vw', height: 'undefined', aspectRatio: '3',
            }}
          />
          <p style={{ paddingLeft: '1vw' }}>Short bio for Jacinta and email address</p>
        </Bio>
      </Cards>
      <Cards>
        Vicki Xu &apos;22
        <Bio>
          <img
            alt="diverse women together"
            src={Vicki}
            style={{
              width: '20vw', height: 'undefined', aspectRatio: '3',
            }}
          />
          <p style={{ paddingLeft: '1vw' }}>Short bio for Vicki and email address</p>
        </Bio>
      </Cards>
    </Directors>
  </div>
)
export default DBios
